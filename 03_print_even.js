//Write a function to print all even numbers till n

const prompt = require('prompt-sync')();
const num = parseInt(prompt('List even number until: '));
let out = [];

for(i=1; i<=num; i++){
    if(!(i%2)) out.push(i);
}

console.log('Even Number list : '+ out);