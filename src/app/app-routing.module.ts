import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movieDetails/:id', loadChildren: () => import('./mainModules/movie-details/movie-details.module').then(m => m.MovieDetailsModule) },
  { path: 'movies', loadChildren: () => import('./mainModules/movies/movies.module').then(m => m.MoviesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
