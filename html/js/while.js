// "use strict"


// // let numMultiplyBy = 2;
// // let counter = 0;
// // while(counter < 16) {
// //     console.log(numMultiplyBy);
// //     numMultiplyBy *= 2;
// //     counter ++
// // }

// // for(let i = 0, num = 2; i<16 ; i++){
// //     console.log(num);
// //     num *= 2;
// //
// // }

// //
// //
// var allCones = Math.floor(Math.random() * 50) + 50; //Number of cones I have.

// let i = 0 // i starts at zero,

// do {
//     let conesSold = Math.floor(Math.random() * 5 - 1) + 1; //Randomized cones being sold
//     console.log(`I have ${allCones} cones`);
//     if (allCones !== 0){                        //If there are still cones, log how many cones are left
//     console.log(`number of cones sold ${conesSold}`);}
//     else{
//         console.log(`I can not sell ${conesSold} I only have ${allCones}`) //Makes sure it won't go negative.
//     }
//     if (allCones === 0) {                       // If cones hit 0 log and break from loop.
//         console.log("I sold all my cones!");
//         break;
//     } else if(allCones >= conesSold){           //If all cones is more than or equal to cones sold:
//         allCones = allCones - conesSold;        // subtract the Number of cones with conesSold and replace the variable until condition is met.

// }
// i++ // for each loop the conditions are being run until allCones = 0;

// }while (i<100);

// //
// // let conesToSell = Math.floor(Math.random() * 50) + 50;
// //
// // do {
// //     let conesToBuy = Math.floor(Math.random() * 5 - 1) + 1;
// //     if (conesToBuy<= conesToSell){
// //         console.log(`${conesToBuy} cones sold`);
// //         conesToSell -= conesToBuy;
// //     }else {
// //         console.log(`Cannot sell you ${conesToBuy} cones, I only have ${conesToSell}`);
// //         console.log(`${conesToSell} cones sold...`)
// //         conesToSell-= conesToBuy;
// //     } if (conesToSell === 0){
// //         console.log("Yay I sold all the cones!")
// //         break;
// //     }
// //
// // }while(conesToSell>0)