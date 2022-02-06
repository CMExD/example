"use strict";
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres:[],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error');
}


if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too many');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('nothing');
        break;
}
