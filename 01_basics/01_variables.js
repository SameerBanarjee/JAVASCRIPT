// const keyword is used to declare a cosntant value which cannot be changed further
const accountId = 14453
let accountEmail = "sameer145@gmail.com"
var accountPassword = "1245"
accountCity = "Bhagalpur"

// VAR declares variables with global scope and allows re-declaration within the same scope
// LET & CONST declares variables with block scope and cannot be re-declaration within same scope.

let accountState;
// In JAVASCRIPT semicolon(;) doesn't matter either u use it or not it'll not make any change.

// accountId = 234 NOT ALLOWED
console.log(accountId)

accountEmail = "sam@org.com"
accountPassword = "6969"
accountCity = "Bangalore"

/*
 Prefer not to use var. Use "const" for constant value and "let" for variable values. 
 because of issue in block scope and functional scope
*/

// to print multiple values at the same time we use tables 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// HOISTING IN JS (VAR)
// LET & CONST IN TEMPORAL DEADZONE
// EXECUTION  - TWO PARTS MEMORY & CODE