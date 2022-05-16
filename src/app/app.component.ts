import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-popular-movies';
  defaultAPI_key = '8ca7086260d6440956c15917b02b2ef1';
  constructor(private router:Router) {}
  ngOnInit(): void {
    const serialized = JSON.stringify(this.defaultAPI_key);
    localStorage.setItem('API_KEY', serialized);
    this.router.navigate(['/movies/popularMovies']);
  }
}
