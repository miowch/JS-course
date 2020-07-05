// Mark
var massMark = 78;
var heightMark = 1.69;

// John
var massJohn = 92;
var heightJohn = 1.95;

// BMI calculation
var bmiMark = massMark / heightMark**2;
var bmiJohn = massJohn / heightJohn**2;

// BMI comparison
var isMarkHasHigherBMIthanJohn = bmiMark > bmiJohn;
console.log("Is Mark\'s BMI higher than John\'s? " + isMarkHasHigherBMIthanJohn);
