//arrays

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeors = ["abc", "xyz"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// console.log(myHeors[0]);
//console.log(myArr2[1]);

// Array methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop() // remove last value

//myArr.unshift(0) // it shift all the array value and add the number at start , if values are too long it will give load to computer 
//myArr.shift()  // it remove the starting array value 

// console.log(myArr.includes(9));// it check the value in array and give result in boolean true or false

// console.log(myArr.indexOf(9));// it will check the index if its not in array then it will give ans in negative index

// const newArr = myArr.join() // it will bind myArr and convert that in string,.... u can check by console.log(typeof newArr);


// console.log(myArr) // now see in myArr one more value added

// slice, splice
console.log("A ", myArr); // original array

const myn1 = myArr.slice(1, 3) 
// sliced array doesn't includes the n th term also
console.log(myn1);
console.log("B ", myArr); // array where we have used slice


const myn2 = myArr.splice(1, 3)
// spliced array includes the n th term also
// after this my spliced array will remove my original array spliced item
// it will remove 1,2 ,3
console.log("C ", myArr); // array where we have used splice
console.log(myn2);