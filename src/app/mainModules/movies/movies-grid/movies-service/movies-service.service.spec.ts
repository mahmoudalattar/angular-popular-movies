import { async, TestBed } from '@angular/core/testing';

import { MoviesService } from './movies-service.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add Movies', () => {
    const testMovies: any[] = [{
      adult: false,
      backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      id: 675353,
      original_language: "en",
      original_title: "Sonic the Hedgehog 2",
      popularity: 12295.749,
      release_date: "2022-03-30",
      title: "Sonic the Hedgehog 2",
      video: false,
      vote_average: 7.7,
      vote_count: 1347,
      genre_ids: [28, 878, 35, 10751, 12]
   }];
   service.setMovies(testMovies);
   service.onMoviesChange().subscribe(movies => {
     expect(movies).toBe(testMovies);
    });
  });
});
