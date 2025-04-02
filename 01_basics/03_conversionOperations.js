let score = "33abc"
//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // it will convert the string in number but it would not be a number. it will print NaN (Not a Number)

// CONVERSION USING NUMBER
// true/false -> 1/0
// null -> 0
// undefined -> NaN
// char string -> NaN
// numeric string -> same number i.e. "33" -> 33
// alphanumeric string -> NaN

let isLoggedIn = 3
let boolLogIn = Boolean(isLoggedIn);
// console.log(boolLogIn);

// BOOLEAN CONVERSION
// 1 or any number other than 0 -> true
// 0-> false
// "" -> false (empty string)
// "string" -> true


// STRING CONVERSION 
let num = 55
let stringnum = String(num);
// console.log(stringnum);
// console.log(typeof stringnum);

// **********************OPERATIONS********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // (**) calculates the power raised to
// console.log(2/3);
// console.log(2%3);

// Operations on String
let str1 = "Hello"
let str2 = " Sameer"
let str3 = str1+str2;
// console.log(str3);

// SOME TRICKY CONVERSION
// console.log("1"+2);
// console.log(1+"2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "3");
// console.log(1 + "2" + 3);

// console.log(true) -> true

//***** AVOID SUCH CONVERSION ******
// console.log(+true);  -> 1
// console.log(true+);  -> error
// console.log(+"");    -> 0

let gamecounter = 100;
// PREFIX OPERATION
// ++gamecounter;
// console.log(gamecounter);

// POSTFIX OPERATION
gamecounter++;
console.log(gamecounter);


