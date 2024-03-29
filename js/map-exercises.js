{
    "use strict";

    const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

    const customers = [
        {
            name: "Fred",
            age: 58,
            occupation: "Police Officer",
            noOfPurchases: 4
        },
        {
            name: "Samantha",
            age: 54,
            occupation: "Teacher",
            noOfPurchases: 18
        },
        {
            name: "Charles",
            age: 38,
            occupation: "Librarian",
            noOfPurchases: 9
        }
    ];

    const pets = [
        {
            name: 'Bud',
            age: 2,
            breed: 'Pug'
        },
        {
            name: 'Gabby',
            age: 10,
            breed: 'Retriever'
        },
        {
            name: 'Fred',
            age: 1,
            breed: 'Lab'
        },
        {
            name: 'Bowser',
            age: 2,
            breed: 'Pug'
        }
    ];

    const family = [
           {
               name: "Cathy",
               gender: "female",
               age: 29,
           },
               {
               name: "Sally",
               gender: "female",
               age: 10,
           },
               {
               name: "Fred",
               gender: "male",
               age: 32,
           },
       ];

    // PROBLEM 1 - create an array of the first letters of each fruit
         

//     let emptyAry =[];

//     const fruitFirst = fruits.map((f) =>{
//          emptyAry.push(f.charAt(0).split(" "));
//      })

    
//   console.log(emptyAry);
            // const firstLetters = fruits.map(function(fruit) {
            //     return fruit[0];
            // });

        //    const firstFruits = fruits.map(fruit =>fruit[0]);

           
        //  console.log(firstFruits);
    // PROBLEM 2 - create array of user objects based on the customers array
    // of objects (each user object should just have name and age properties)

        // const customer = customers.map( ({name,age}) => ({name, age})
        // )
        // console.log(customer);

           


    // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
    // containing the same properties as the objects on the customers objects
    //    const civil = customers.filter((servant)=>{
    //     return servant.occupation === 'Police Officer' || servant.occupation === 'Teacher'
    //    })
    //    console.log(civil);

    // PROBLEM 4 - determine the average age of customers
       const ages = customers.map((person) => {return person.age})

       console.log(ages)
       
       const addedAge = ages.reduce((accumulator, age) => {accumulator += age; return accumulator}, 0);

       console.log(addedAge/customers.length)
    // PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
    // with the following shape...
    /*

        {
            name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
            age: THE_TOTAL_OF_ALL_PET_AGES,
            breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATED_INTO_A_SINGLE_STRING
        }

     */

    // PROBLEM 6 - take in an array of pets and return an array of the length of first names for pugs only
    // your output for the given input should be [3, 6] for 'Bud' and 'Bowser'


    // PROBLEM 7 - create a function getFemaleFamilyMembers() that when given the family variable as an argument,
    // returns an array of female family member names

    // PROBLEM 8 - create a function makeLongPetString() that when given the variable of pets,
    // returns a string of all property values with dashes separating each property value

    // PROBLEM 9 - create a function that when given an array of first names, returns an array of the same names with a last name of Smith

        // input = ['Sally', 'Fred', 'Steve']
        // output = ['Sally Smith', 'Fred Smith', 'Steve']


    // PROBLEM 10 - create a function that when given an array of numbers, returns the sum of even numbers

    // PROBLEM 11 - create a function that when given an array of numbers, returns the sum of all numbers evenly divisible by 10

    // PROBLEM 12 - create a function that when given an array of names, returns a string of all the first letters of each name

    // PROBLEM 13 - create a function that when given an array of values, returns an array of only the truthy values

    // PROBLEM 14 - create a function that when given an object, returns the property values as an array of elements

    // PROBLEM 15 - create a function that when given an object, returns the property values as an array of elements

    // PROBLEM 16 - create a function that when given three arguments: a min num, a max num, an array
    // of nums will return the array of nums that are only between the min and max values, inclusive

    // PROBLEM 17 - create a function that when given an array of strings, returns an array of objects
    // with properties for the given string value and the length of the string and the string without vowels (not including y)

     }