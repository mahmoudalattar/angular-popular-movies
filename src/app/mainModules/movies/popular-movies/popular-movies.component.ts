import { Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '@http/api-service/api-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  movies: any = null;
  currentPage : number = 1;
  totalItems : number = 0;
  API_key: any = '';
  genreList : any = null;


  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.API_key = JSON.parse(localStorage.getItem('API_KEY')!);
    this.retrievePopularMovies(this.API_key,1);
  }

  retrievePopularMovies(api_key:String, page:number) {
    const params = {
      api_key: api_key,
      language:'en-US',
      page: page,
    };
    this.movies = null;
    this.ApiService.getPopularMovies(params).subscribe({
      next: response => {
        console.log(response);
        this.movies = response.results;
        this.currentPage = response.page;
        this.totalItems = 10000 //response.total_results  //changed as per api "page must be less than or equal to 500"
      },
      error: error => {
        console.error(error);
      },
   });
  }

  handlePageChange(event: number) {
    this.retrievePopularMovies(this.API_key, event);
  }

}
