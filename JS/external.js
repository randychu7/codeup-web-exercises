"use strict";

console.log("Hello from external");

alert("Welcome to my Website!");

let favColor = prompt("What is your favorite color?");
if(favColor !== '') {
    let favMessage = "Great, " + favColor + " is my favorite color as well!";
    alert(favMessage);
}

//Exercise 3


let mermaidDays = prompt("How many days did you rent little Mermaid for?");
let brotherDays = prompt("How many days did you rent Brother Bear for?");
let hercules = prompt("How many days did you rent Hercules for?");

alert("You spent "+ ((mermaidDays+brotherDays+hercules)*3) + " dollars")



let googleHours = prompt("How many hours did you work for google?")
let facebookHours = prompt("How many hours did you work for Facebook?")
let amazonHours = prompt("How many hours did you work for Amazon?")

let totalGooglePay = 400 * googleHours;
let totalFacebookPay = 350 * facebookHours;
let totalAmazonHours = 380 * amazonHours;

let totalPay = totalGooglePay + totalFacebookPay + totalAmazonHours;

alert("You have been paid " + totalPay + " this week.");


