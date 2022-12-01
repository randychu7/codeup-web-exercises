"use strict"

// let i = 1;
// while( i < 65536){
//     i+=i;
//     console.log(i);
// }

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// console.log(`Number of cones to sell ${allCones}`);
// let i = 0;
//
// do {
//     var conesSold = Math.floor(Math.random()*(5-1))+1;
//     if(allCones === 0){
//         console.log("Yay I sold them all!")
//         break;
//     }else if(allCones>= conesSold){
//        allCones = allCones- conesSold;
//         console.log(`You sold ${conesSold} amount of cones`);
//         console.log(`You have ${allCones} left`);
//     }
//
//    else if (allCones < conesSold){
//         console.log(`I cannot sell you ${conesSold} cones I only have ${allCones}`)
//     }
//     i++;
// } while(i < 100)



















var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Number of Cones for Sale");
let i = 0
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    console.log("number of cones sold");
    allCones = allCones - conesSold;
    console.log(allCones);

i++
}while(i<100);