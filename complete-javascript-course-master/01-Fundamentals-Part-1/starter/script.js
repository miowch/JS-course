// LECTURE: Values and Variables

const country = 'Germany';
const continent = 'Europe';
let population = 88.13;

console.log(country, continent, population);

// LECTURE: Data Types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = 'German';

// Uncaught TypeError: Assignment to constant variable.
// country = 'France';

// LECTURE: Basic Operators

console.log(population / 2);
console.log(population += 1);

let populationFinland = 6;
let populationAverage = 33;

console.log(population > populationFinland);
console.log(population < populationAverage);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(description);

// CODING EXERCISE #1

let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);