"use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
// function sayHello
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
// const sayHello = (name) => {
//     let message =  `Hello ${name}!`;
//     return message;
// }
// console.log(sayHello("Randy"));
//
// // console.log(sayHello("Codeup"));
// // function sayHello(name){
// //     let message = "Hello " + name + "!";
// //     return message;
// // }
// //
// // /**
// //  * TODO:
// //  * Call the function 'sayHello' and pass your name as a string literal argument.
// //  * Store the result of the function call in a variable named 'helloMessage'.
// //  *
// //  * console.log 'helloMessage' to check your work
// //  */
// //
// let helloMessage = sayHello("Randy");
//     console.log(helloMessage);
//
// //
// // /**
// //  * TODO:
// //  * Store your name as a string in a variable named 'myName', and pass that
// //  * variable to the 'sayHello' function. You should see the same output in the
// //  * console.
// //  */
//
// let myName = "John";
// let helloMessage2 = console.log(sayHello(myName));
// console.log(helloMessage2);
//
// //
// // // Don't modify the following line, it generates a random number between 1 and 3
// // // and stores it in a variable named random
// let random = Math.floor((Math.random() * 3) + 1);
// console.log("The random number generated was " + random);
// //
// // /**
// //  * TODO:
// //  * Create a function called 'isTwo' that takes a number as a parameter.
// //  * The function should return a boolean value based on whether or not the passed
// //  * number is the number 2.
// //  *
// //  * Example
// //  * > isTwo(1) // returns false
// //  * > isTwo(2) // returns true
// //  * > isTwo(3) // returns false
// //  *
// //  * Call the function 'isTwo' passing the variable 'random' as a argument.
// //  *
// //  * console.log *outside of the function* to check your work (you should see a
// //  * different result everytime you refresh the page if you are using the random
// //  * number)
// //  */
//
// const isTwo = (random) => {
//     let answer = (random === 2);
//     return answer;
// }
//
// console.log("Is the number 2?");
// let randomAnswer = isTwo(random);
// console.log(randomAnswer);
//
// // function isTwo(random){
// //     let answer = (random === 2);
// //     return answer;
// // }
//
//
// //
// //
// // /**
// //  * TODO:
// //  * Create a function named 'calculateTip' to calculate a tip on a bill at a
// //  * restaurant. The function should accept a tip percentage and the total of the
// //  * bill, and return the amount to tip
// //  *
// //  * Examples:
// //  * > calculateTip(0.20, 20) // returns 4
// //  * > calculateTip(0.25, 25.50) // returns 6.375
// //  * > calculateTip(0.15, 33.42) // returns 5.013
// //  */
//
// let tipAnswer = calculateTip(10231,22);
// console.log(tipAnswer);
//
// function calculateTip(bill,tip){
//     let tipFormatted = (tip/100);
//     let total = (bill * tipFormatted).toFixed(2) ;
//     let completeTip = parseFloat(total);
//     return completeTip;
// }
//
// //
// // /**
// //  * TODO:
// //  * Use prompt and alert in combination with your calculateTip function to
// //  * prompt the user for the bill total and a percentage they would like to tip,
// //  * then display the dollar amount they should tip
// //  */
// //
//
// let mealPrice = prompt("How much was your meal?");
// let tipAmount = prompt("What percent would you like to tip");
//
//
// let tipTotal = calculateTip( mealPrice, tipAmount )
//
// alert(tipTotal.toFixed(2));
//
// //
// //
// // /**
// //  * TODO:
// //  * Create a function named `applyDiscount`. This function should accept a price
// //  * (before a discount is applied), and a discount percentage (a number between 0
// //  * and 1). It should return the result of applying the discount to the original
// //  * price.
// //
// //  * Example:
// //  * > var originalPrice = 100;
// //  * > var discountPercent = .2; // 20%
// //  * > applyDiscount(originalPrice, discountPercent) // 80
// //  *
// //  * > applyDiscount(45.99, 0.12) // 40.4712
// //  */
// //
//
// let appliedDiscount = applyDiscount(100,25);
// console.log(`You are about to apply a discount`);
// console.log(`You owe ${appliedDiscount}!`);
//
// function applyDiscount(price,discount){
//
//     let discountFormatted = discount/100;
//     let totalDeal = price - (price * (discountFormatted));
//     return totalDeal.toFixed(2);
// }


// ===== MINI PROBLEMS
//
// // Write a function, returnFive, that returns the number five. No inputs should be defined.
// function returnFive(number){
//     return 5;
// }
//
// console.log(returnFive());
// // Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// function isFive(number){
//     return number == 5;
// }

// console.log(isFive(3));
// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// function isShortWord(word){
//     if (word.length <= (5)){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// isShortWord('helloo');
//
// // Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// function isSameLength(input){
//     if (input.length===5){
//         return "True";
//     }else{
//         return "False";
//     }
// }
//
// console.log(isSameLength('hello'));

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

function getSmallerSegment(str,num){
let number = str.substring(0,num);
return number.toLowerCase();
}

console.log(getSmallerSegment("HELLOOO", 5));


// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"



// ===== SCOPE and IIFE

// var keyword creates "Function Scope" variables

// let globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     let localVar = "Look, I'm Local!"; // declare a local variable
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
// }
//
// scopeExample();
//
// alert(localVar); // localVar is NOT accessible here and this will produce an error


// (function() {
//     var aaaa = 'encapsulated in IIFE';
// })();


// let alsoNotGlobal = 'not on the window object';
//
// const alsoNotGlobalYAY = 'not on the window object either';

// var is 'function-scoped'

// {
//     var x = 3;
// }
// console.log(x);

// const and let are 'block-scoped'

// function addOne(input) {
//     return input + y;
// }
//
// console.log(y);



// =====  CALLBACK, ANONYMOUS, HIGHER ORDER FUNCTIONS

// function returnFive() {
//     return 5;
// }

// addTwo is a "Higher Order Function" because it takes in other functions as arguments
// functions that return a function are also "Higher Order Functions"

// function addTwo(fn) {
//     return returnFive() + 2;
// }
//
// console.log(addTwo(returnFive)); // Callback function "returnFive" is passed to addTwo

// console.log(addTwo(function() { // Anon function passed to addTwo()
//     return 10;
// }))

// other common higher order functions built in to JS: forEach, setInterval, setTimeout, map, filter, reduce


// =====  IIFE


// ================ FUNCTION DRILLS


// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
function returnTwo(){
    return parseFloat(2);
}
console.log(returnTwo());

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

function returnName(name){
    return name;
}

console.log(returnName('Randy'));
// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))



// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())



// 5) Make a function called sayHowdy() which console.logs the string "Howdy!"
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value


// ======== CONDITIONALS (switch / ternary / with functions)


// write a function, abbrevToDay, that takes in a three-character abbreviation for the day of the week and returns the complete day of the week
// Example: abbrevToDay('mon') returns 'Monday'

