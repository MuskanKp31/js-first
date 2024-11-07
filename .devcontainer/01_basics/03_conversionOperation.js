let score = "33"
let score1 = "33abc"
let score2 = null
let score3 = true
let score4 = "name"

//console.log(typeof score)

let valueInNumber = Number(score) // convert string to number
let valueInNumber1 = Number(score1) // if string have number it will not convert to number
let valueInNumber2 = Number(score2) // if null then convert to null value which is Zero
let valueInNumber3 = Number(score3) // if boolean value then convert to zero or one which is boolean value
let valueInNumber4 = Number(score4) // if string which can't convert to number will give NaN

// console.log(valueInNumber)
// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);
// console.log(valueInNumber4);
/*
    conclusion :- 
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
*/

let isLoggedIn = 1
let isLoggedIn1 = "" // empty string means false
let isLoggedIn2 = "name" // string having value means true
let BooleanIsLoggedIn = Boolean(isLoggedIn)
let BooleanIsLoggedIn1 = Boolean(isLoggedIn1)
let BooleanIsLoggedIn2 = Boolean(isLoggedIn2)

// console.log(BooleanIsLoggedIn)
// console.log(BooleanIsLoggedIn1)
// console.log(BooleanIsLoggedIn2)

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let value1 = -3
let negValue = -value
let posValue = value1 // it will give negative value bcz value1 is negative and it follows algebra rule
let negvalue1 = -value1 // it will give positive value bcz value1 is negative and it is also converting to negative so - and - = + and it follows algebra rule
//  console.log(negValue);
//  console.log(posValue); 
//  console.log(negvalue1);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " name"

let str3 = str1 + str2
 //console.log(str3);
 
/*
 it will do concatenation bcz string and number can't be added
*/
// console.log("1" + 2); 
// console.log(1 + "2");

/*
    it will add a number and concatenate the string but if it will start with string then it will get concetanted and if it start with no then it will add number and print string as it is and 
*/
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); // read the guideline toPrimitive 7.1.1 in tc39.ex

// console.log( (3 + 4) * 5 % 3); // follow BODMAS

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // bad syntax don't use that


let gameCounter = 100
gameCounter++; //postfix operator
//++gameCounter; // prefix operator
console.log(gameCounter);

// link to study operator 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion