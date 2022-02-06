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

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
        
//     } else {
//         console.log('error');
//         i--;        
//     }    
// }

// if (personalMovieDB.count < 10) {
//     console.log("мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("норм");
// } else if (personalMovieDB.count >= 30) {
//     console.log("киномана");
// } else {
//     console.log("error");
// }

//  console.log(personalMovieDB);


// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 20; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// let num = 20;
    
// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
//     console.log(num);
// }

// showFirstMessage("hello");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("hello");

// };
// logger();

// const calc = (a, b) => { return a + b };


// const str = "test";
// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "some fruit";
// console.log(fruit.indexOf("q"));

// const logg = "Hello World";
// console.log(logg.slice(6, 11));

// console.log(logg.substring());

// console.log(logg.substr(6, 5));

// const num = 12.4;
// console.log(Math.round(num));

// const test = "12.2px";
// //console.log(parseInt(test));

// console.log(parseFloat(test));

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres:[],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');        
//         } else {
//             console.log('error');
//             i--;        
//         }    
//     }
// }
// //rememberMyFilms();

// function detectFilms() {
//     if (personalMovieDB.count < 10) {
//         console.log("мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("норм");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("киномана");
//     } else {
//         console.log("error");
//     }
// }
// //detectFilms();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <=3; i++) {
//         const genre = prompt(`Ваш любимый жанр под немером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }
// //writeYourGenres();

// function writeYourGenres() {
//     for (let i = 1; i <=3; i++) {        
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под немером ${i}`);
//     }
// }
// writeYourGenres();


// const options = {
//     name: 'test',
//     width: 1024,
//     height:1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

//console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;
// console.log(options);


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//             console.log(`Свойства ${key} имеет значение ${options[key]}`);
//             counter++;
//     }        
// }
// console.log(counter);

// const arr = [1, 23, 3, 4, 12, 22];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a- b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


//arr.pop();
//console.log(arr);

// for (let i = 0; i< arr.length;i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// let a = 5;
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj); 

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adsddsfsd';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);



// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];
// console.log(array);
// console.log(newAarray);

// const q = {
//     one: 1,
//     two: 2
// };

//const newObj = {...q};

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("hello");
//     }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

//jonh._proto_ = soldier;

// Object.setPrototypeOf(jonh, soldier);

//console.log(jonh.armor);
//jonh.sayHello();