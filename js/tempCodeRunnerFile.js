const numberOffilms = prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
count: numberOffilms,
movies: {},
actors:{},
genres:[],
privat: false
};
const film = prompt("Один из последних просмотренных фильмов?", "");
const rate = prompt("На сколько оцените его?", "");
const movies = {
    film: {},
    rate:{}
};
console.log(movies);