//Write a function to calculate area of the circle where 
//raidus is input and formula is A=pi x square of radius

const prompt = require('prompt-sync')();
const rad = parseInt(prompt('Calculate area of circle when radius: '));

console.log('Area of circle : '+ (22/7*rad*rad));