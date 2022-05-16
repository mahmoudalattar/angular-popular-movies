import {Component, OnInit} from '@angular/core';
import { ApiService } from '@http/api-service/api-service.service';
import { MoviesService } from '@mainModules/movies/movies-grid/movies-service/movies-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  API_key: any = '';

  constructor(private ApiService:ApiService, private router:Router, private MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.API_key = JSON.parse(localStorage.getItem('API_KEY')!);
  }

  search(event:any) {
    let query = event.target['value'];
    if (query === '') {
      return;
    }
    const params = {
      api_key: this.API_key,
      query: query
    };
    this.ApiService.searchMovies(params).subscribe({
      next: response => {
        console.log(response);
        this.MoviesService.setMovies(response.results);
        this.router.navigate(['/movies']);
      },
      error: error => {
        console.error(error);
      },
    });
  }

}
