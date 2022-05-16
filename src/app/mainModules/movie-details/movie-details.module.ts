import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';


@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieRatingComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    NgbModule
  ]
  ,
  exports: [
    MovieDetailsComponent
  ]
})
export class MovieDetailsModule { }
