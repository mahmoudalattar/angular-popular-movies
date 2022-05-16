import { Component, OnInit, Input } from '@angular/core';
import { baseUrls } from '@env/baseurls';

const baseImageUrl = `${baseUrls.baseImageUrl}`;
const defaultImageUrl = `${baseUrls.defaultImageUrl}`;

@Component({
  selector: 'app-movie-grid-item',
  templateUrl: './movie-grid-item.component.html',
  styleUrls: ['./movie-grid-item.component.scss']
})
export class MovieGridItemComponent implements OnInit {
  @Input()
  movie!: {
    title: string,
    poster_path: string,
    genre_ids: any,
    vote_average: any,
    id:number
  };
  @Input()
  genreList!: {
    id: number,
    name: string
  }[];
  API_key: any = '';
  modalOpen:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  createPosterImageUrl(poster_path: string) {
    if (!poster_path) {
      return defaultImageUrl;
    }
    return baseImageUrl + poster_path;
  }

  findGenre(id: number){
    return this.genreList?.filter(genre => genre.id === id)[0];
  }

  closeModalEvent(openStatus: boolean) {
    console.log(openStatus);
    this.modalOpen = openStatus;
  }

}
