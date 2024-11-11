const score = 400
// console.log(score)


const balance = new Number(100); // if we specify the type of data then it will show value with that data type
// console.log(balance)

// console.log(balance.toString()); // here we have convert the data type of balance

// console.log(balance.toString().length); //here we have used the string property length to check the length of balance value

// console.log(balance.toFixed(2)); //to fixed is use to fixed the data value after decimal

const otherNumber1 =23.8966
const otherNumber2 =123.8966
const otherNumber3 =1123.8966
// console.log(otherNumber1.toPrecision(3)) // it used to show precised value 
// console.log(otherNumber1.toPrecision(4)) // it used to show precised value 
// console.log(otherNumber2.toPrecision(3)) // iprecising 3 values so round of 4 digit which is after decimal
// console.log(otherNumber3.toPrecision(3)) // precised starting 3 values and  giving rest as exponential  

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++ Maths +++++++++++++
// console.log(Math.abs(4)); // convert the number to positive
// console.log(Math.round(4.6)); // used for rount of value
// console.log(Math.ceil(4.2)); // used for round of upper value( round of top value)
// console.log(Math.floor(4.6)); // used for rount of value (round of below value)
// console.log(Math.min(4, 3, 6, 8)); // used to check min value from array
// console.log(Math.max(4, 3, 6, 8));  // used to check max value from array

// console.log(Math.random()); // always show values between 0 and 1
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
