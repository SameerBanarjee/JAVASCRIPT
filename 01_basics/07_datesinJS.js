// DATES in JAVASCRIPT

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// INTERVIEW ASKED
console.log(typeof myDate);   // Object

// MONTH IN JS BEGINS FROM 0 i.e. 0 denotes 'JANUARY' if you declare month in single digit like myCreateDate.

// let us create our own date
let myCreatedDate = new Date(2025, 4, 1)
console.log(myCreatedDate.toDateString());

// our own dates can also be created with time  FORMAT : (YYYY,MONTH,DATE,HOUR,MINUTES,SECOND)
let myOwnDate = new Date(2025,4,1, 10, 50)
console.log(myOwnDate.toLocaleString());

// creating own date in string format of ("YYYY-MONTH-DATE") / or you can also use ("MONTH-DATE-YYYY") 
//  it automatically comes with a random time 
let din = new Date("2025-05-01")
console.log(din.toLocaleString());

// TIMESTAMPS IN JS, it gives the millisecond value from starting date till now
let myTimeStamp = Date.now()
// this give total millisecond value
console.log(myTimeStamp);

// this gives millisecond value from specified date till date 
console.log(din.getTime());
// IT used while comparing time, during hotel booking system or answering a poll in quiz.

// Date.now() gives the value of current date in js but in terms of millisecond
// now if you want to convert it in second you can do so 
// INTERVIEW ASKED

console.log(Math.floor(Date.now()/1000));
// Math.floor is used to remove values after decimal / (dividing by 100 converts millisecond to second)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

// you can create your own object of newDate and with that object you can call multiple properties. 
newDate.toLocaleString('default',{
    weekday: "long"
})