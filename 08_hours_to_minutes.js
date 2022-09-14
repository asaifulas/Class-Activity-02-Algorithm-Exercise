//Write a function to convert hours into minute

const prompt = require('prompt-sync')();

console.log('Convert hours into minutes');
const hours = parseInt(prompt('Hours: '));

console.log('Minutes : '+ (hours*60));