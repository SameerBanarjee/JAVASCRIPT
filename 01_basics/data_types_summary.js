// There are 2 types of DATATYPE IN JAVASCRIPT
// They are : primitive and non-primitive

// Primitive Data Types in Javascript (Primitive means it is predefined in js)
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt(for some scientific values)

// Language is never defined in Javascript for example,
const score = 100
const sam = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;  // it's value is undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

// here both the symbol return different values however they conatain same string in input
console.log(id == anotherId)

console.log(id)
console.log(anotherId)

// to print the value or to run the code just open the terminal type node "space" file name and hit enter
// here for example node 01_basics/data_types_summary.js 

// we never told that score is integer type or sam is boolean type.

// Javascript is "dynamically typed language", the type of variable is determined by the value it holds at runtime.
// You don't need to specify the data type (like int, string, boolean) when declaring a variable.

const bigNumber = 314254697595212457895n
// adding n at the end of integer makes it a bigInt value.

//Reference (Non Primitive) Data Types
// Array, Objects, Functions

// This is an ARRAY in Javascript
const heros = ["srk" , "salman", "siddharth"];

// This is an OBJECT in Javascript
// Object in javascript is written under curly braces and expressed as key:value pairs
let myObj = {
    name : "Sameer",
    age : 22,
}

// This is a FUNCTION in javascript
// body of a function is defined as function(){}
const myFunction = function(){
    console.log("Hello World");
}

// typeof is a predefined function in javascript which is used to print the datatype of any variable/function/object

console.log(typeof myFunction)

// Return type of each datatype

// score -> number
// sam -> number
// isLoggedIn -> boolean
// outsideTemp -> object 
// bigNumber -> bigint
// userEmail -> undefined
// anotherId -> symbol
// heros -> object
// myObj -> object
// function -> function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// There are two types of MEMORY IN JAVASCRIPT
// They are STACK(primitive) & HEAP(non-primitive)

// STACK MEMORY : Always used for primitive datatype
//              : You always get a copy of the variable


// HEAP MEMORY  : Always used for Non-Primitive datatype
//              : You always gets a reference of the variable i.e. changes reflect directly in original value

let myname = "Sameer"
let anothername = myname
anothername = "chaiaurcode"

console.log(myname)
console.log(anothername)
// here it is stack memory and primitive data type so a copy of variable is passed

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "sameer@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// here it is heap memory and non primitive data type so reference of variable is passed changes reflect in original variable.