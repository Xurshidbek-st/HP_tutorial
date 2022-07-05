"use strict"
const numberOfSeries = +prompt("nechta serial ko'rdingiz?", "");
let seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt("Oxirgi ko'rgan serialingiz?");
const b = prompt("unga necha baxo berasiz?"),
      c = prompt("Oxirgi ko'rgan serialingiz?"),
      d = prompt("unga necha baxo berasiz?");

seriesDB.series.[a]=b;
seriesDB.series.[c]=d;
console.log(seriesDB);
