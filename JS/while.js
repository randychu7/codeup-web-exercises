"use strict"

// let i = 1;
// while( i < 65536){
//     i+=i;
//     console.log(i);
// }





var allCones = Math.floor(Math.random() * 50) + 50; //Number of cones I have.

let i = 0 // i starts at zero,

do {
    let conesSold = Math.floor(Math.random() * 5 - 1) + 1; //Randomized cones being sold
    console.log(`I have ${allCones} cones`);
    console.log(`number of cones sold ${conesSold}`);

    if (allCones === 0) {                       // If cones hit 0 log and break from loop.
        console.log("I sold all my cones!");
        break;
    } else if(allCones >= conesSold){           //If all cones is more than or equal to cones sold:
        allCones = allCones - conesSold;        // subtract the Number of cones with conesSold and replace the variable until condition is met.

}
i++ // for each loop the conditions are being run until allCones = 0 or i=100;

}while (i<100);