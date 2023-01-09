
"use strict";

// a = 15;

// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
// a: 50
// };
// obj.a = 10;
// console.log(obj);

// let v = `срывшсгырвгша`;
const numberOffilms = prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
count: numberOffilms,
movies: {},
actors:{},
genres:[],
privat: false
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
