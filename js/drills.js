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

function hasLowerCase(string){
    if(string == string.toLowerCase()){
        return true;
    } else {
    return false;
    }
}

console.log(hasLowerCase("hello"));

