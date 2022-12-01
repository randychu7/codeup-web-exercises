"use strict"

//
//
let promptedNumber = prompt("What is your number?");
console.log("Number to skip is"+promptedNumber);
promptedNumber = parseInt(promptedNumber);
for (var i = 0; i <=50; i++) {
    if (i === promptedNumber) {
        console.log(`Yikes, skipping number: ${promptedNumber}`);
        continue;
    } else if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
}

// const number = prompt('Enter the number of terms');
// let n1 = 0, n2 = 1, nextTerm;
//
// console.log("Fibonacci series:");
//
// for (let i = 1; i<= number; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2
//     n2= nextTerm;
// }
//
//
