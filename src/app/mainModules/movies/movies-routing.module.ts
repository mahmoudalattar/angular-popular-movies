import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  { path: '', component: MoviesGridComponent },
  { path: 'popularMovies', component: PopularMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
