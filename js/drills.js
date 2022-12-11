// function isOdd(number){
//     if(number % 2 !== 0) {
//         return "Number is odd"
//     }else{
//         return "Number is not odd"
//     }
// }
//
// console.log(isOdd(3));
//
// function isEven(number){
//     if(number % 2 === 0){
//         return "Number is even"
//     }else{
//         return "Number is not even"
//     }
// }
// console.log(isEven(2));
//
// function identity(input){
//     return input;
// }
// console.log(identity(4));
// //
// function isFive(input){
//     if (input === 5){
//         return "Number is 5"
//     }else{
//         return "Number is not 5"
//     }
// }
// console.log(isFive());
// //
// function addFive(input){
//     let userInput = input + 5;
//         return userInput;
// }
// console.log(addFive(4));
//
// function isMultipleOfFive(input){
//     if(input % 5 === 0){
//         return "Is a multiple";
//     }else {
//         return "Is not a multiple";
//     }
// }
//
// console.log(isMultipleOfFive(5));
//
// function isThree(input){
//     if(input === 3){
//         console.log("Is three")
//     }else {
//         console.log("Not Three")
//     }
// }
// isThree(1);
// //
// function isMultipleOfThree(input){
//     if (input % 3 === 0){
//         return "Is a multiple of 3";
//     } else {
//         return "Is not a multiple of three"
//     }
// }
// console.log(isMultipleOfThree(3));
//
// function isMultipleOfThreeAndFive(input){
//     if(input % 3 === 0 && input % 5 === 0){
//         return "It can be divided by 3 and 5"
//     }
//         return "It can not be divided by 3 and 5"
//
// }
//
// console.log(isMultipleOfThreeAndFive(13));
//
// function isMultipleOf(target, n){
//      let multipleAnswer = (target * n);
//      return multipleAnswer;
// }
//
// console.log(isMultipleOf(2,5));
//
// function isTrue(boolean){
//     if (boolean === true){
//         return "Is true";
//     }else {
//         return "Is False";
//     }
//
// }
//
// console.log(isTrue(true));
//
// function isFalse(boolean){
//     if (boolean === false){
//         return "Is true";
//     }else {
//         return "Is False";
//     }
//
// }
//
// console.log(isFalse(true));
//
// function isTruthy(input){
//     if (input === !!true){
//         return "is truthy";
//     }else{
//         return "is not";
//     }
// }
//
// console.log(isTruthy(true));

// function isFalsey(input){
//     if (input === !true){
//         return "is falsey";
//     }else{
//         return "is not";
//     }
// }
//
// console.log(isFalsey(false));

// function isVowel(input){
//     if (input == `a` || input == `e` || input == `i` || input == `o` ||input == `u`){
//         return "is a vowel";
//     }else {
//         return "is not a vowel";
//     }
// }
//
// console.log(isVowel('a'));

// function isConsonant(input){
//         if (input == `z` || input == `z` || input == `t` || input == `g` ||input == `h`){
//         return "is a consonant";
//     }else {
//         return "is not";
//     }
// }
//
// console.log(isConsonant('h'));

// function toCapital(letter) {
//     let result = letter.toUpperCase();
//     return result;
// }
//
// console.log(toCapital('hello'));

// function toLowerCase(letter){
//     let result = letter.toLowerCase();
//     return result;
// }
//
// console.log(toLowerCase('HELLO'));

// function hasLowerCase(string){
//     if(string == string.toLowerCase()){
//         return true;
//     } else {
//     return false;
//     }
// }
//
// var alphabet = [];
// function isPan() {
//
//     for (var i = 65; i <= 90; i++) {
//         alphabet.push(String.fromCharCode(i));
//     }
// }
// console.log(alphabet)
// //

//
// function isPangram(string) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let splitString = string.toLowerCase().replace(/[., 0-9]/g, '').split('').sort().join('');
//     let noRepeats = splitString.replace(/(.)\1+/g, "$1");
//     console.log(noRepeats)
//
//         if (noRepeats == alphabet){
//             return true;
//         }else {
//             return false;
//         }
//
// }
//
// console.log(isPangram(" abcdefghijklmnopqrstuvwxyz"))

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
// var str = "Hello World";
// var count = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) == "l") {
//         count++;
//     }
// }
// console.log(count);


// function xO (input){
//     input = input.toLowerCase();
//     let countO = 0;
//     let countX = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input.charAt(i) == "o") {
//             countO++;
//             console.log(countO)
//         }
//         for (let j = 0; i <input.length; i++){
//             if (input.charAt(i) == "x"){
//                 countX++;
//                 console.log(countX)
//             }
//         }if (countX === countO){
//             return true;
//         }else {
//             return false;
//         }
//     }
// }

// console.log(xO('xoxxo'))
//
// function xO(input) {
//     var x = 0;
//     var o = 0;
//     for (var i = 0; i < input.length; i++) {
//         if (input.charAt(i) == "x") {
//             x++;
//         } else if (input.charAt(i) == "o") {
//             o++;
//         }if (typeof input === 'boolean'){
//             return true;
//         }
//     }
//     if (x == o) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(xO(false))
// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:
//
// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

//
// function total(arr) {
//     if (arr.length === 5){
//         let sum1 = arr[0]+arr[1];
//         let sum2 = arr[1]+arr[2];
//         let sum3 = arr[2]+arr[3];
//         let sum4 = arr[3]+arr[4];
//         let sumA = sum1 + sum2;
//         let sumB = sum3 + sum4;
//         let sumC = sum2 + sum3;
//
//         return (sumA + sumC) + (sumB+sumC);
//
//     }else if(arr.length ===4){
//         let add1 = arr[0] + arr[1];
//         let add2 = arr[1] + arr[2];
//         let add3 = arr[2] + arr[3];
//         let added1 = add1 + add2;
//         let added2 = add3 + 5;
//
//         return added1 + added2;
//     }else if(arr.length === 3){
//         let sumAdd1 = arr[0] + arr[1];
//         let sumAdd2 = arr[1]+ arr[2];
//         return sumAdd1 + sumAdd2;
//     }
// }
//
// console.log(total([1,2,3,4]));

// function numberJoy(n) {
//     // n = parseFloat(n);
//     console.log(n);
//     let sumDigits = n.split();
//     console.log(sumDigits)
// }
//
// console.log(numberJoy(1994))

// 1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
// 2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
// 3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
// otherwise, the function should return the string ‘input num NOT in input array’

// function reverseWords(str) {
//     let reversedStr = str.split('').reverse();
//     let arry = [];
//
//     for (var i = reversedStr.length - 1; i >= 0; i--) {
//
//         return arry.unshift(reversedStr[i]);
//
//     }
//
//
// }
// function reverseWords(str) {
//     str = str.split('');
//     console.log(str);
//     let arr = [];
//     for (var i = str.length - 1; i >= 0; i--) {
//         arr.push(str[i]);}
//    return arr.join('').split(' ').reverse().join(' ');
//     }
//
//
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// //
// str = [1,2,3,4,5]
// var arr = [];
// for (var i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);}
//
// console.log(arr);

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// function createPhoneNumber(numbers) {
//     var str = '';
//     for (var i = 0; i < numbers.length; i++) {
//         if (i === 0) {
//             str += '(' + numbers[i];
//         } else if (i === 2) {
//             str += numbers[i] + ') ';
//         } else if (i === 5) {
//             str += numbers[i] + '-';
//         } else {
//             str += numbers[i];
//         }
//     }
//     return str;
// }
//
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9]));

// function maskify(cc) {
//     let str = "";
//     for (var i = 0; i < cc.length; i++) {
//         if (i < cc.length - 4) {
//             str += '#'
//         } else {
//             str += cc[i];
//         }
//         return str;
//     }
// // }
// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }
//
// console.log(maskify('123321231231231'))