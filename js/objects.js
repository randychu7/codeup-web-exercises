(function() {
    "use strict";
/**-
  What is a JS object?
 A data structure with multiple keys

 - What is the practical difference between these two statements?
 someObject.someProperty = 4;
 someObject[‘someProperty’] = 4;

 - Are JS objects mutable?
 yes
 - Given the following code, what will be logged and why?
 var objA = {a: 1, b: 2};
 var objB = objA;
 objA.a = 7;
 a would now be 7

 console.log(objB.a);
 - Is it possible to nest another object inside of an object?
 Yes
 - Is it possible to nest an array in an object?
 Yes
 - What does ‘this’ refer to within an object method in JS?
 This refers to the object
 */
//
// var beverages = [
//     {
//         name: 'Dr.Pepper',
//         type: 'Soda',
//         volumeInLiters: '1',
//         priceInCents: 120,
//         expirationDate: '2023',
//         datesOfPreviousSips:['Dec 15','Dec 20','Dec 25'],
//         isOpen:'Yes'
//     },
//     {
//         name: 'Sprite',
//         type: 'Soda',
//         volumeInLiters: '1',
//         priceInCents: 180,
//         expirationDate: '2023',
//         datesOfPreviousSips: 'None',
//         isOpen:'No'
//     },
//     {
//         name: 'Fanta',
//         type: 'Soda',
//         volumeInLiters: '1',
//         priceInCents: 210,
//         expirationDate: '2023',
//         datesOfPreviousSips: 'None',
//         isOpen:'No'
//     }
// ]
//     console.table(beverages);
//
// beverages.forEach(function (element){
//     element.isClose = "True";
//     })
// console.table(beverages);

// var car = {};
//     car.make = "Toyota",
//     car.model = "Camry"
//
// // create a logMakeModel method on the car object
//     car.logMakeModel = function () {
//         console.log("Car make/model is: " + this.make + " " + this.model);
//     };
//
// // log the make/model
//     car.logMakeModel();

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
        firstName: "Randy",
        lastName: "Chu",

    }

    console.log(person.firstName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
// function sayHello(){
//         console.log(`Hello from ${person.firstName} ${person.lastName}`);
//     }

    person.sayHello = function (){
        return `Hello from ${this.firstName} ${this.lastName}`
    }
//
person.sayHello();

    person.middleName = 'N/A'
/** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
function usCurrency(dollar){
        return dollar.toLocaleString('en-US',{style: 'currency',currency:'USD'})
}

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function (user){
        if(user.amount > 200){
            let savings = parseFloat(user.amount) * .12;
            let total = parseFloat(user.amount) - (savings) ;

            console.log(`${user.name} spent ${usCurrency(user.amount)} and gets a 12% discount, their total amount after the discount is ${usCurrency(total)}, they saved ${usCurrency(savings)}`)
        }else{
            console.log(`${user.name} did not get a discount`);
        }
    })




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    let books = [
        {
            name: "Harry Potter",
            author:{
                firstName: "J.K",
                lastName: "Rowling",
            }
        },
        {
            name: "Da Vinci Code",
            author: {
                firstName: "Dan",
                authorLastName: "Brown",
            }
        },
        {
            name: "Fifty Shades of Grey",
            author: {
                firstName: "John",
                lastName: "Jean"
            }
        },
        {
            name: "Bob the Builder",
            author: {
                firstName: "Bob",
                lastName: "builder",
            }
        }
    ]

    // console.log(books[0].name)


    books.forEach(function (book,index){
        console.log(`Book #${index+1} \n Book name: ${book.name}\n Author: ${book.author.firstName} ${book.author.lastName}\n----------------------------`);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // let bookCreated = prompt("What is the book title?");
    // let authorName = prompt("What is the authors First Name?");
    // let authorLast = prompt("What is author last name?");

function createBook(bookCreated, authorFirst, authorLast){
        books.push({
            name:bookCreated,
            author: {
            firstName: authorFirst,
            lastName: authorLast
                }
             })
        }

        

    //Create a function that creates an object
    function createBook(bookCreated, author, date){
    let authorArray = author.split(' ');
    let bookObject = {
            name:bookCreated,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1],

            },
            date: date
        }
        return bookObject;
    }

    let books2 = [
        createBook('bob','chu'),
        createBook('hello', 'dude')
    ]
    console.log(books2);



// function showBookInfo(bookSelect) {
//     // let bookSelect = prompt("What book would you like to know about?");
//     for (let i = 0; i < books.length; i++) {
//         if (bookSelect.toLowerCase() === books[i].name.toLowerCase()) {
//             console.log((`Title ${books[i].name} Written By ${books[i].firstName} ${books[i].lastName}`));
//         }
//     }
// }
//



// console.table(books);
// const search = what => books.find(element => element.name === what);
// const info = search("")
//
// function showBookInfo(){
//
//     let input = prompt("What book would you like to know about?")
//     const search = what => books.find(element => element.name === what);
//     const info = search(input)
//     if (info){
//         console.table(books);
//     }
// }
// showBookInfo();





    // books.forEach(function (book,index,array){
    //
    // })


    // arryNames.push(names.givenName)

    // const list = [
    //     {
    //         name: 'Michael Scott',
    //         company: 'Dunder Mufflin',
    //         designation: 'Regional Manager',
    //         show: 'The Office'
    //     },
    //     {
    //         name: 'Barney Stinson',
    //         company: 'Golaith National Bank',
    //         designation: 'Please',
    //         show: 'How I met your mother'
    //     },
    //     {
    //         name: 'Jake Peralta',
    //         company: 'NYPD',
    //         designation: 'Detective',
    //         show: 'Brooklyn 99'
    //     },
    // ]
    //
    // // list.every(element => element.responsibility = 'making people laugh')
    // list.every(function (element) {
    //     element.responsibility = "making people laugh";
    // });
    // list.forEach(function (element) {
    //     element.favCharacter = "true";
    // });
    // list.forEach(function (element) {
    //     delete element.designation;
    // });

    // console.table(list);
//
//     const users = [
//         {
//                 givenName:'Sam',
//                 age: 21
//              },
//             {
//                 givenName: 'Cathy',
//                 age: 32
//             },
//             {
//                 givenName: "Karen",
//                 age: 43
//             }
// ]
//
//
// //     0. Log each given name
//     console.log(users[0].givenName);
//     console.log(users[1].givenName);
//     console.log(users[2].givenName);
//
//     1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
//
//     // let arryNames = [];
//     //
//     //     for (var i = 0; i<users.givenName.length; i++ ){
//     //         arryNames.push(users.givenName[i])
//     //     }
//
//
//         // users.forEach(function (names){
//         //     arryNames.push(names.givenName)
//         // })
//     //
//     // let addedNames = arryNames.join(" ");
//     // console.log(addedNames);
//
//     2. Change the names of all users to “John Doe”
//     users.forEach(function (name){
//         name.givenName = "John Doe"
//     })
//     console.log(users);
// // 3. Increase the current age of all users by 1
//
// users.forEach(function (name){
//    name.age += 1;
//
// })
//     console.log(users);
// //     Can you accomplish each step using iteration?
//
//     // how to get the total of all ages
//    let totalAges = 0;
//     users.forEach(function (user) {
//         totalAges += user.age;
//     });
//
//     users.forEach(function (user){
//         console.log(`user: ${user.givenName}| ${user.age}`)
//     })
//
//     // print users names that are older than 30
//
//     users.forEach(function (user){
//         if (user.age > 30){
//             console.log(user.givenName)
//         }
//     })
//
//     // longest string question
//
//     //Sam, Cathy, Karen
//
//     let longestName = [];
//     users.forEach(function (user){
//         if (user.givenName.length > longestName.length){
//             longestName = user.givenName;
//         }
//     })

    // var fib = function(n) {
    //     if (n < 2) {
    //         return n;
    //     } else {
    //         return fib(n - 1) + fib(n - 2);
    //     }
    // };

    // console.log();


})();