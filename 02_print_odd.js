//Write a function to print all odd numbers till n

const prompt = require('prompt-sync')();
const num = parseInt(prompt('List odd number until: '));
let out = [];

for(i=0; i<=num; i++){
    if(i%2) out.push(i);
}

console.log('Odd Number list : '+ out);