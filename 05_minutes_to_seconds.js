//Write a function to convert minute into seconds

const prompt = require('prompt-sync')();
const min = parseInt(prompt('Calculate seconds when minutes: '));

console.log('Seconds : '+ (min*60));