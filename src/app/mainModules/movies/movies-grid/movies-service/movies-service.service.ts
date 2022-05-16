import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: BehaviorSubject<Array<any>> = new BehaviorSubject(null as any);

  onMoviesChange(): Observable<Array<any>> {
    return this.movies.asObservable();
  }
  
  setMovies(nextMovies: Array<any>): void {
    this.movies.next(nextMovies);
  }
  
  resetMovies(): void {
    this.movies.next(null as any);
  }
}
