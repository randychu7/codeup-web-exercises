"use strict";

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
analyzeColor("black");

function analyzeColor(color){
    if(color === "red"){
        return "Red is the color of an apple.";
    }else if(color === "blue") {
        return "Blue is the color of the sky!";
    } else if(color === "green") {
        return "Green is the color of grass";
    } else {
        return `I don't know anything about ${color}`;
    }

}
// // Don't change the next two lines!
// // These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
let colorRandom = analyzeColor(randomColor);
console.log(colorRandom);

// // /**
// //  * TODO:
// //  * Comment out the code above, and refactor your function to use a switch-case statement
// //  */
// //
switch (randomColor){
    case 'red':
        console.log("Red is the color of apples");
        break;
    case 'orange':
        console.log("orange is the color of oranges");
        break;
    case 'yellow':
        console.log("yellow is the color of the sun");
        break;
    default:
        console.log(`I don't know anything about ${randomColor}`);
        break;
}
// // /**
// //  * TODO:
// //  * Prompt the user for a color when the page loads, and pass the input from the
// //  * user to your `analyzeColor` function. Alert the return value from your
// //  * function to show it to the user.
// //  */
// //
// let inputColor = prompt("Please input a color!");
// let answer = analyzeColor(inputColor);
// alert(answer);
//
//


/* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *

//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return totalAmount + 0;
//     }
// else if (luckyNumber === 1){
//         return totalAmount * 0.90}
// else if (luckyNumber === 2){
//         return totalAmount * 0.75}
// else if (luckyNumber === 3){
//         return totalAmount * 0.65}
// else if (luckyNumber === 4){
//         return totalAmount * 0.50}
// else if (luckyNumber === 5){
//         return;
//     }
// }

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return `Your original price was ${totalAmount} you don't get any discount`;
    }
    else if (luckyNumber === 1){
        return `Your original price was ${totalAmount}, the discounted price is $${totalAmount * 0.90}`}
    else if (luckyNumber === 2){
        return `Your original price was ${totalAmount}, the discounted price is $${totalAmount * 0.75}`}
    else if (luckyNumber === 3){
        return `Your original price was ${totalAmount}, the discounted price is $${totalAmount * 0.65}`}
    else if (luckyNumber === 4){
        return `Your original price was ${totalAmount}, the discounted price is $${totalAmount * 0.50}`}
    else if (luckyNumber === 5){
        return "Everything is free!"
    }
}
// Test line
// let discountedPrice = calculateTotal(2,100);
// alert(discountedPrice);




 /**
//  * TODO:
// //  * Uncomment the line below to generate a random number between 0 and 5.
// //  * (In this line of code, 0 is inclusive, and 6 is exclusive)
// //  * Prompt the user for their total bill, then use your `calculateTotal` function
// //  * and alerts to display to the user what their lucky number was, what their
// //  * price before the discount was, and what their price after the discount is.
// //  */

// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);


alert(`Your lucky number is ${luckyNumber}!`);

let totalAmount = prompt("How much was your bill?");

let finalDiscount = calculateTotal(luckyNumber,totalAmount);

alert(finalDiscount);

//
// if (luckyNumber === 1){
//     alert(`Your price before the discount is ${totalAmount}, your price after the discount is ${(totalAmount * 0.90)}`);
// }
// else if (luckyNumber === 2){
//     alert(`Your price before the discount is ${totalAmount}, your price after the discount is ${(totalAmount * 0.75)}`);
// }
// else if (luckyNumber === 3){
//     alert(`Your price before the discount is ${totalAmount}, your price after the discount is ${(totalAmount * 0.65).toFixed(2)}`);
// }
// else if (luckyNumber === 4){
//     alert(`Your price before the discount is ${totalAmount}, your price after the discount is ${(totalAmount * 0.55).toFixed(2)}`);
// }
// else if (luckyNumber === 5){
//     alert(`Your price before the discount is ${totalAmount}, your meal is free!`);
// }
// else if (luckyNumber === 6){
//     alert(`Your price before the discount is ${totalAmount}, your meal is exclusive`);
// }
//
// else if (luckyNumber === 0){
//     alert(`Your price before the discount is ${totalAmount}, you get no discount`);
//
// }
 // alert(finalDiscount);



// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved


confirm("Would you like to enter a number?");

var enterNumber;

while (true) {
    enterNumber = prompt("Please enter a number", "");
    if (!isNaN(enterNumber)) {
        break;
    }
    alert("Please enter a number");
}

if(enterNumber % 2 !== 0){
    alert("The number is odd");
} else {
    alert("The number is even")
}

alert(enterNumber + ` + 100 is equal to ${parseInt(enterNumber) + 100}`);

if (enterNumber < 0){
    alert("The number is negative");
} else {
    alert("The number is positive");
}
