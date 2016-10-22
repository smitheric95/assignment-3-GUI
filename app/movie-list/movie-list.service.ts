import { Injectable } from '@angular/core';

export class Movie {
	title: string;
	year: number;
	imagePath: string;
	rating: number;
}

export const MOVIES: Movie[] = [
  	{title: "Batman", year: 1988, imagePath: "../../images/shining.jpg", rating: 0},
	{title: "Home Alone", year: 1990, imagePath: "../../images/nemo.jpg", rating: 0},
	{title: "Titanic", year: 1996, imagePath: "../../images/hungergames.jpg", rating: 0}
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