"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done!");
//     } else {
//         console.log("error!");
//         i--;
//     }
// }

let i = 0;
// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//     i++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done!");
//     } else {
//         console.log("error!");
//         i--;
//     }
// }

do {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
    i++;

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done!");
    } else {
        console.log("error!");
        i--;
    }
}
while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Watched a few movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You're classic film watcher"); 
} else if (personalMovieDB.count >= 30) {
    console.log("You're movie fan!");
} else {
    console.log('error');
}


console.log(personalMovieDB);

