import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { baseUrls } from '@env/baseurls';

const movieBaseUrl = `${baseUrls.movie}`;
const searchBaseUrl = `${baseUrls.search}`;
const genreListBaseUrl = `${baseUrls.genreList}`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
 
  getMovieDetails(movieID:number, params: any): Observable<any> {
    const url = `${movieBaseUrl}/${movieID}`; 
    return this.http.get(url, { params });
  }

  getPopularMovies(params: any): Observable<any> {
    const url = `${movieBaseUrl}/popular`; 
    return this.http.get(url, { params });
  }

  getGenreList(params: any): Observable<any> {
    const url = `${genreListBaseUrl}`; 
    return this.http.get(url, { params });
  }

  searchMovies(params: any): Observable<any> {
    const url = `${searchBaseUrl}/movie`; 
    return this.http.get(url, { params });
  }

}
