(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Randy', 'Shah', 'Oh', 'Pan'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
// for (var i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // names.forEach(function (element){
    //     console.log(element);
    // })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

//     //
//     let arry = [1,2,3,4,5];
//
//     function first(){
//         console.log(arry[0])
//     }
//     first();
//
//     function second(){
//         console.log(arry[1]);
//     }
//     second();
//
//     function last(){
//         console.log(arry[4])
//     }
//     last();
//
// //     1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
//     let foods = ['Pizza','Hotdog','Chicken', 'Turkey','avacados', 'ice Cream', 'apple']
//
//      for (let i = 0; i < foods.length; i+=1) {
//          let firstChar = foods[i][0];
//              let vowels = ['a','e','i','o','u']
//          if(vowels.includes(firstChar)) {
//              console.log(foods[i]);
//
//          }
//      }


        // }


//     2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
//     let arry = [1,2,3,4,5,6];
//     let total = 0;
//
//     function addEvenNums(number) {  // create a function that only effects even numbers
//         if (number % 2 === 0) {
//             total += number;
//         }
//     }
//
//     arry.forEach(addEvenNums); // use forEach and call the function through it
//
//
//     console.log(total);


//     3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
//     otherwise, the function should return the string ‘input num NOT in input array’

    // let array = [1, 2, 3, 4, 5, 6, 7]


// function checkIfNumInArray(number){
//    for (var i = 0; i < array.length; i++){
//        if(array[i] === number){
//            return "num in array";
//
//        }else {
//            return "false";
//        }
//    }
// }
//
// checkIfNumInArray(2);



