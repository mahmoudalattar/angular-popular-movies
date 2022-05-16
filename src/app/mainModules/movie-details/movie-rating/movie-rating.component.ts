import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {
  @Input()
  currentRate!: number;
  @Input()
  reviews!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
