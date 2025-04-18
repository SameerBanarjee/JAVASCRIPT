const score = 100
// console.log(score);

// declaring a number in javascript
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// to fixed is used to set number of digits after decimal

// Similarly we have toPrecision method which rounds off the given number to the given no. of digits

const num = 123.645
// console.log(num.toPrecision(4));

//  You can also have commas in between big numbers using 'toLocaleString' function 
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(8,7,9,4));

console.log(Math.random());
console.log(Math.random());

// Math.random() always gives different value and in between 0 and 1.

console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);
const  min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)