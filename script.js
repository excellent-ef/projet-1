"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log("done!");
    } else {
        console.log("error!");
        i--;
    }
}

console.log(personalMovieDB);

