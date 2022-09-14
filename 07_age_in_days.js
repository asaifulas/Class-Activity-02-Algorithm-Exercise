// Write a function to convert age (in years) to the days.
//  Assume that there are 365 days in 1 year.

const prompt = require('prompt-sync')();

console.log('Calculate Age in Days');
const age = parseInt(prompt('Age: '));

console.log('Your Age in Days : '+ (age*365)+' days');