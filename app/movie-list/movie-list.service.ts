import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
	movies : any[];

	constructor(){
		this.movies = [
			{title: "Movie1", year: 2015, imagePath: "movie1.jpg"},
			{title: "Movie2", year: 2016, imagePath: "movie2.jpg"}
		];
	}

  	getMovies() : any[] {
		return this.movies;
	}

	getMovie(num : number) : any {
		return this.movies[num];
	}
}