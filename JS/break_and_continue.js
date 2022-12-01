"use strict"



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