import { Injectable } from '@angular/core';

export class Movie {
	title: string;
	year: number;
	imagePath: string;
	rating: number;
}

export const MOVIES: Movie[] = [
  	{title: "Movie1", year: 2015, imagePath: "movie1.jpg", rating: 0},
	{title: "Movie2", year: 2016, imagePath: "movie2.jpg", rating: 0}
];

@Injectable()
export class MovieService {
	movies : any[];

	constructor(){
		this.movies = MOVIES;
	}

  	getMovies() : any[] {
		return this.movies;
	}

	getMovie(num : number) : any {
		return this.movies[num];
	}
}