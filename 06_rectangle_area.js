//Write a function to calcualte area of the rectangle where width 
//and height of the rectangle are input

const prompt = require('prompt-sync')();

console.log('Calculate Area of rectangle');
const width = parseInt(prompt('Width: '));
const height = parseInt(prompt('Height: '));

console.log('Area of Rectangle : '+ (width*height));