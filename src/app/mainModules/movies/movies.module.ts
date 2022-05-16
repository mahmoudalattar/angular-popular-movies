import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { MovieGridItemComponent } from './movies-grid/movie-grid-item/movie-grid-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetailsModule } from '@mainModules/movie-details/movie-details.module';


@NgModule({
  declarations: [
    PopularMoviesComponent,
    MoviesGridComponent,
    MovieGridItemComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MovieDetailsModule,
    NgxPaginationModule
  ]
})
export class MoviesModule { }
