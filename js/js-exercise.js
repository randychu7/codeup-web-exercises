

// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...



// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };

// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }

// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }

// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }


// let schoolRating =  0;

// function getSchoolRating(school){
//   for(let i = 0; i < school.schools.length; i++) {
//     schoolRating += school.schools[i].rating;;
   
//   }
//   return schoolRating;
// }


// console.log(getSchoolRating(neighborhood3));

// function bestNeighborhood (area){
//   if (getSchoolRating(area) >= 24 && area.medianHomePrice <300000 && area.crimeRate == "low" ){
//     return ("is the best neighborhood!")
//   }else {
//     return ("is not the best neighborhood!")
//   }
// }

// console.log(bestNeighborhood(neighborhood1));
// console.log(bestNeighborhood(neighborhood2));
// console.log(bestNeighborhood(neighborhood3));
// console.log(bestNeighborhood(neighborhood4));






  //  return (neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate == "low" && neighborhood.schools.rating <= 24)



// console.log(neighborhoods.school);
// function isDesirableNeighborhood(neighborhood) {
//   let schoolRating = 0;
//   console.log(neighborhoods);
//   neighborhoods.schools.forEach(school => {
//     schoolRating += school.rating;
//     console.log(schoolRating);
//   });

//   return neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === "low" && schoolRating >= 24;
// }





// fn(neighborhood1) // returns false due to school rating
// fn(neighborhood2) // returns false due to crime rate
// fn(neighborhood3) // returns true
// fn(neighborhood4) // returns false due to median home price
    

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

// function encodeStr(input){
// let lower = input.toLowerCase();
// let splitInput = lower.split("");

// for(let i=0; i<splitInput.length; i++){
// splitInput[i] = splitInput[i].replace('a','@');
// splitInput[i] = splitInput[i].replace('i','1');
// splitInput[i] = splitInput[i].replace('s','$');
//   }
// return splitInput.join("");
// }




//  console.log(encodeStr('apple')) // returns ‘@pple’
//  console.log(encodeStr('codeup')) // returns ‘codeup’
//  console.log(encodeStr('SASS')) // returns ‘$@$$’
//  console.log(encodeStr('bike')) // returns ‘b1ke’


  
// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.


const strs = [
	{
		id: 1,
		str: 'hello'
	},
	{
		id: 2,
		str: 'world'
	},
	{
		id: 3,
		str: 'codeup'
	},
	{
		id: 4,
		str: 'x'
	}
]

function reverseStrings (str){
 
  for (let i = 0; i < str.length; i++){
  
 str[i].str= (str[i].str.split('').reverse().join(''));

  }
  return strs;
}

console.log(reverseStrings(strs));


// reverseStrings(strs) // returns...

// [
// 	{
// 		id: 1,
// 		str: 'olleh'
// 	},
// 	{
// 		id: 2,
// 		str: 'dlrow'
// 	},
// 	{
// 		id: 3,
// 		str: 'puedoc'
// 	},
// 	{
// 		id: 4,
// 		str: 'x'
// 	}
// ]