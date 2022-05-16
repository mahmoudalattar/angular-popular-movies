import { Component, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ApiService } from '@http/api-service/api-service.service';
import { baseUrls } from '@env/baseurls';

const baseImageUrl = `${baseUrls.baseImageUrl}`;
const defaultImageUrl = `${baseUrls.defaultImageUrl}`;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnChanges, OnDestroy {
  @Input() movieID!:number;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  movieDetails: any = null;
  API_key: any = '';

  constructor(private ApiService: ApiService) { }

  ngOnChanges(): void {
    this.API_key = JSON.parse(localStorage.getItem('API_KEY')!);
    console.log(this.movieID);
    this.retrieveMovieDetils(this.API_key,this.movieID);
  }

  retrieveMovieDetils(api_key:String, movieID:number) {
    const params = {
      api_key: api_key,
      language:'en-US'
    };
    this.movieDetails = null;
    this.ApiService.getMovieDetails(movieID, params).subscribe({
      next: response => {
        console.log(response);
        this.movieDetails = response;
      },
      error: error => {
        console.error(error);
      },
   });
  }

  createBackdropImageUrl(backdropPath: string) {
    if (!backdropPath) {
      return defaultImageUrl;
    }
    return baseImageUrl + backdropPath;
  }

  closeModal(value: boolean) {
    this.closeModalEvent.emit(value);
  }

  ngOnDestroy(): void {
    this.closeModal(false);
  }

}
