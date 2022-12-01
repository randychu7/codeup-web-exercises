"use strict"


function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++){
        console.log(num * i);
    }}
showMultiplicationTable(7);



//
// for (var i = 0; i< 10; i++) {
//     let random = Math.floor(Math.random() * 200) + 20;
//     // console.log(random);
//     if (random % 2 === 0) {
//         console.log(`${random} is an even number`);
//     } else {
//         console.log(`${random} is an odd number`);
//     }
// }
//
//
//
// for (let i = 0; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i);
//     }
// }
//

// // Loop down from 100 - 5 by increaments of 5 *
// for(var i = 100; i >= 5; i-=5) {
//     console.log(i);
// }

// let promptedNumber = prompt("What is your number?");
// console.log("Number to skip is"+promptedNumber);
// promptedNumber = parseInt(promptedNumber);
//  for (var i = 0; i <=50; i++) {
//      if (i === promptedNumber) {
//          console.log(`Yikes, skipping number: ${promptedNumber}`);
//          continue;
//      } else if (i % 2 !== 0) {
//          console.log(`Here is an odd number: ${i}`);
//      }
//  }
//

//
// let i = 1;
// while( i < 65536){
//         i+=i;
//     console.log(i);
// }
