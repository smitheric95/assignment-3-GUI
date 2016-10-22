import { Component } from '@angular/core';
import { MovieService } from './movie-list.service';

@Component({
  selector: 'movie-list',
  templateUrl: './app/movie-list/movie-list.html',
  styleUrls: [ './app/movie-list/movie-list.css' ],
  providers: [ MovieService ]
})

export class MovieListComponent{
	movies: any[];

	constructor( private movieService : MovieService ){
		this.movies = movieService.getMovies();
	}

	changeRating(title : string, num : number){
		this.movies[ this.movies.map(x => x.title).indexOf(title) ].rating = num;
	}
}


