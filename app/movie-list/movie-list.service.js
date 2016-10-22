"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());
exports.Movie = Movie;
exports.MOVIES = [
    { title: "Movie1", year: 2015, imagePath: "movie1.jpg" },
    { title: "Movie2", year: 2016, imagePath: "movie2.jpg" }
];
var MovieService = (function () {
    function MovieService() {
        this.movies = exports.MOVIES;
    }
    MovieService.prototype.getMovies = function () {
        return this.movies;
    };
    MovieService.prototype.getMovie = function (num) {
        return this.movies[num];
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie-list.service.js.map