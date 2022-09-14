//Write a function to print the factorial of number n. 
//If n = 5, then factorial of 5 is 5 * 4 * 3 * 2 * 1. 
//If n = 10, the factorial of 10 is 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

const prompt = require('prompt-sync')();

console.log('Get Factorial of number n');
const n = parseInt(prompt('n: '));
let out = n

for(let i=1; i<n; i++){
    out = out * i;
}

console.log('Result : '+ (out));