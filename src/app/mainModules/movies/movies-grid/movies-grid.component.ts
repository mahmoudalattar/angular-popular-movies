import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '@http/api-service/api-service.service';
import { MoviesService } from '@mainModules/movies/movies-grid/movies-service/movies-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit, OnChanges {
  @Input() movies!: any[];
  @Input() params!: {
    currentPage: number,
    totalItems: number
  };

  currentPage : number = 1;
  totalItems : number = 0;
  API_key: any = '';
  genreList : any = null;


  constructor(private ApiService:ApiService, private MoviesService:MoviesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
    this.API_key = JSON.parse(localStorage.getItem('API_KEY')!);
    this.retrieveGenreList(this.API_key);
    console.log(this.movies);
    console.log(this.params);
    this.movies? null:this.MoviesService.onMoviesChange().subscribe(movies => this.movies = movies);
    this.params? null:this.params={currentPage:1, totalItems:0};


    // this.retrievePopularMovies(this.API_key,1);
  }

  retrieveGenreList(api_key:String) {
    const params = {
      api_key: api_key,
      language:'en-US'
    };
    this.ApiService.getGenreList(params).subscribe({
      next: response => {
        console.log(response);
        this.genreList = response.genres;
      },
      error: error => {
        console.error(error);
      },
   });
  }

  // retrievePopularMovies(api_key:String, page:number) {
  //   const params = {
  //     api_key: api_key,
  //     language:'en-US',
  //     page: page,
  //   };
  //   this.movies = null;
  //   this.ApiService.getPopularMovies(params).subscribe({
  //     next: response => {
  //       console.log(response);
  //       this.movies = response.results;
  //       this.currentPage = response.page;
  //       this.totalItems = 10000 //response.total_results  //changed as per api "page must be less than or equal to 500"
  //     },
  //     error: error => {
  //       console.error(error);
  //     },
  //  });
  // }

  // handlePageChange(event: number) {
  //   this.retrievePopularMovies(this.API_key, event);
  // }

}
