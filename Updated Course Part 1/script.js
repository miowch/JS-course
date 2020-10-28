// Values and Variables
const country = 'Germany';
const continent = 'Europe';
let population = 83.02;

console.log(country, continent, population);

// Data Types
// let, const and var
let isIsland = false;
const language = 'German';

console.log(typeof isIsland, typeof country, typeof population, typeof language);

// Basic Operators
// population += 1;
let halfOfPopulation = population / 2;
console.log(halfOfPopulation);

let populationInFin = 6;
console.log(population < populationInFin);

let populationAverage = 33;
console.log(population < populationAverage);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Taking Decisions
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population}`);
}

// Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Equality Operators: == vs. ===
/*
let numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
if (language === 'English' && population < 50 && isIsland == false){
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
switch (language) {
    case 'Chinese' || 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// The Conditional (Ternary) Operator
console.log(
    `${country}'s population is ${population > 33 ? comparison = 'above' : comparison = 'below'} average`
); 