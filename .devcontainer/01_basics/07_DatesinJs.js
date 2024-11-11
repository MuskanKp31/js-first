// Dates

let myDate = new Date()
// console.log(myDate); // show the exact date
// console.log(myDate.toString()) // show the date in string and also show day name with time
// console.log(myDate.getHours()) // show the current hour of current date
// console.log(myDate.toDateString()) // show the date in string and also show day name
// //press ctrl + space to see more methods of date 

// console.log(typeof myDate) //want to check date type

// let myCreatedDate = new Date(2023, 0, 23) 
// // 0 stands for month array , 0 represent jan , 1 for feb,.../.. same goes on .
// // 23 represent date
// // 20223 represent year

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// // 0 stands for month array , 0 represent jan , 1 for feb,.../.. same goes on .
// // 23 represent date
// // 20223 represent year
// // 5 represnt hrs
// //3 represent min
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14") 
// 0 stands for month array , 0 represent jan , 1 for feb,.../.. same goes on .
// 23 represent date
// 20223 represent year
// 5 represnt hrs
//3 represent min
let myCreatedDate = new Date("01-14-2023") 

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
})