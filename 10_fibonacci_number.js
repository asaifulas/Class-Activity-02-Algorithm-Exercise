//Write a function to print first n fibonacci numbers. 
//In fobonacci sequence, next number is the sum of previous 2 number. 
//First 2 numbers in sequence are constant. 0, 1 is constant in 
//fibonacci sequence. exp: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....

const prompt = require('prompt-sync')();

console.log('Get fibonacci number of n');
const n = parseInt(prompt('n: '));
let output = [0, 1];
if(n == 1) output = [0];

for(let i=2; i<n; i++){
    output[i] = output[i-1] + output[i-2]
}

console.log('Result : '+ (output));