// CODING EXERCISE #1

let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / (heightJohn * heightJohn);

// CODING EXERCISE #2

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// CODING EXERCISE #3
let dolphins_average = (97 + 112 + 101) / 3;
let koalas_average = (109 + 95 + 106) / 3;

if (dolphins_average >= 100 && dolphins_average > koalas_average) {
    console.log('Dolphins win!');
} else if (koalas_average >= 100 && dolphins_average < koalas_average) {
    console.log('Koalas win!');
} else if (dolphins_average >= 100 && koalas_average >= 100) {
    console.log('Draw!');
} else {
    console.log('No winner!');
}

// CODING EXERCISE #4
let bill = 430;

let tip = bill * (((50 <= bill) && (bill <= 300)) ? 0.15 : 0.2);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);