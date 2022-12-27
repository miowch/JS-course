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
// console.log(population += 1);

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

// LECTURE: Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

let descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

// LECTURE: Taking Decisions: if / else Statements

const age = 19;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const averagePopulation = 33;
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

// CODING EXERCISE #2

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
