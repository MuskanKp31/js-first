//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
//console.log(userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "name",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
//myFunction();

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Summary:-  

    1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//  ++++++++++++++++++++++++++++
// Stack (Primitive ), Heap (Non= Primitive)
 let myname = "name"
 let anothername = myname // it will create a copy of assigning value not refer to original value in stack refer daigram to understand
 anothername = "name1"

 console.log(myname);
 console.log(anothername);

 let user = {
    email: "user@google.com",
    upi: "user@ybl"
 }
 let usertwo = user
  
 usertwo.email ="user@gmail.com" // it will chnage value of user email

 console.log(user.email)
 console.log(usertwo.email);