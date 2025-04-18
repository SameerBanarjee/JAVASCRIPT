// STRINGS IN JAVASCRIPT

const name = "Sameer"
const mathsScore = 100
// console.log(name + " " + mathsScore + " " + "in University")

// String interpolation is a modern and better way of writing long strings
// String interpolation is done using a '$' symbol and adding variable name in curly braces to add that value

console.log(`Hello my name is ${name} and I scored ${mathsScore} marks in my Mathematics Exam.`);

// Declaring a string in javascript
const gameName = new String('FreeFire')

// Since string is an object and is stored in key value pairs we can access it's key like
// console.log(gameName[0]);

// To find prototype we use variableName.__proto__
// console.log(gameName.__proto__);

// There are multiple predefined function in javascript for strings
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

//to find character at some index or to find index of some character we use
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

// slicing of strings in javascript i.e. finding substring of a string
const newString  = gameName.substring(0,4);
console.log(newString);

// If we want to find substring in reverse manner we can use negative integer but only in .slice method
// not in the substring method. Substring does not consider negative integer input.

// this will start from end
const revString = gameName.slice(-7,4);
console.log(revString);

// .trim() function is used in javascript to remove starting and ending blank spaces in a string
const str = "   Sam   "
console.log(str);
console.log(str.trim());

// .replace() is a method of string which takes two arguments, one the portion of string which has to be removed and the other string by which it has to be removed
const url = "https://sameer.com/sameer%20banarjee"

console.log(url.replace('%20', '-'));

// .includes() is a method in string which is used to find whether a portion is present in string
console.log(url.includes('sameer'))

// .split() is a method in string which breaks string in arrays on some points which is given in argument of .split().
