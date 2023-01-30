const user = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filteredId = user.filter((u)=> u.languages.length >= 3)
console.log(filteredId);

let ageArray = user.reduce((accumulator, currentValue) => {
    let experience = (accumulator += currentValue.yearsOfExperience);
    return experience;

  }, 0);

  console.log(ageArray/user.length);


const mappedUser = user.map((n)=> n.email);

console.log(mappedUser);

let longestEmail = mappedUser.reduce((curr,prev) => {
return curr.length >= prev.length ? curr : prev;
},0);

console.log(longestEmail);


//  let userNames = user.reduce(( teacher, index) => {
//     if (index === teacher.length - 1) {
//         return `${sentence} ${teacher.name}.`;
//     } else {
//         return `${sentence} ${teacher.name},`;
//     }
// }, 'Your instructors are:');
// console.log(userNames);


const userNames = user.reduce((str,user)=>{
str += user.name + ',';
return str;
}, 'Your instructors are: ').slice(0,-1)+ '.';

console.log(userNames)

  // let id = 1;
  // let filterId = users.filter((user) => user.id !== id);
  // console.log("filter method => ", filterId);
  
  // let filterAge = users.filter((user) => {
  //   return user.age > 19;
  // });
  // console.log(filterAge);


    // const users = [
    //     {
    //       id: 1,
    //       name: "Isaac",
    //       age: 26,
    //     },
    //     {
    //       id: 2,
    //       name: "Jason",
    //       age: 20,
    //     },
    //     {
    //       id: 3,
    //       name: "Justin",
    //       age: 20,
    //     },
    //     {
    //       id: 4,
    //       name: "Cason",
    //       age: 6,
    //     },
    //   ];
    
  /* -------------------------------------------------------------------------- */
  /*                          map method under the hood                         */
  /* -------------------------------------------------------------------------- */
  
  // let output = [];
  // for (let i = 0; i < users.length; i++) {
  //   output.push(users[i].name);
  // }
  // console.log("for loop implementation => ", output);
  
  /* -------------------------------------------------------------------------- */
  /*                                    map()                                   */
  /* -------------------------------------------------------------------------- */
  
  // let numbers = [1, 2, 3, 4];
  // let squaredNumbers = numbers.map((x) => x * x);
  // console.log(squaredNumbers);
  
  // let names = users.map((user) => {
  //   return user.name;
  // });
  // console.log("map method implementation => ", names);
  
  // let age = users.map((user) => {
  //   if (user.age < 19) {
  //     return user.name;
  //   }
  // });
  
  /* -------------------------------------------------------------------------- */
  /*                        filter method under the hood                        */
  /* -------------------------------------------------------------------------- */
  
  // let filterOutput = [];
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].id !== 1) {
  //     filterOutput.push(users[i]);
  //   }
  // }
  // console.log("for loop implementation of filter => ", filterOutput);
  
  /* -------------------------------------------------------------------------- */
  /*                                  filter()                                  */
  /* -------------------------------------------------------------------------- */
  
//   let id = 1;
//   let filterId = users.filter((user) => user.id !== id);
//   console.log(filterId);
  
//   let filterAge = users.filter((user) => {
//     return user.age < 19;
//   });
//   console.log(filterAge);
  
  /* -------------------------------------------------------------------------- */
  /*                        reduce method under the hood                        */
  /* -------------------------------------------------------------------------- */
//   let cart = [
//     { item: "apple", price: 0.5 },
//     { item: "banana", price: 0.3 },
//     { item: "orange", price: 0.6 },
//   ];
  
  // let runningSum = false;
  // for (let i = 0; i < cart.length; i++) {
  //   runningSum += cart[i].price;
  // }
  // console.log("for loop implementation =>", runningSum);
  
  /* -------------------------------------------------------------------------- */
  /*                                  reduce()                                  */
  /* -------------------------------------------------------------------------- */
 
  /**
   * callbackFn => A function to execute for each element in the array
   * accumulator (prevValue) => is holding the prevoius value if inital value is passed it starts at the specifed value.
   * currentValue => The current value is the element in the array that the reduce() method is currently processing.
   * initialValue (0) => A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue
   */
  
  /**
   * Think of the prevValue parameter as if we are initializing the variable prevValue after every iteration
   * Example:
   *
   * let prevValue = 0 (since we passed in the inital value in the reduce method)
   * 1 iteration we add the prevValue(0) to the currentValue.price(0.5) and the variable prevValue gets re-initialized to 0.5
   *
   * let prevValue = 0.5
   * 2nd iteration we get the sum of prevValue(0.5) + currentValue.price(0.3) and the prevValue is re-initialized to 0.8
   *
   * let prevValue = 0.8
   * 3rd iteration we get the sum of prevValue(0.8) + currentValue.price(0.6) and the prevValue is re-initialized to 1.4
   *
   * so we then retun the sum of the last iteration.
   */
  
  // const nums = [1, 2, 3, 4, 5];
  // let sumOfArray = nums.reduce((prevValue, currentValue) => {
  //   return (prevValue += currentValue);
  // }, 0);
  // console.log(sumOfArray);
  
  // const strings = [];
  
  // let TotalCost = cart.reduce((prevValue, currentValue) => {
  //   return (prevValue += currentValue.price);
  // }, 0);
  // console.log(TotalCost);