
//IFFIE put all code in the IFFIE statement, if variables are on the outside they can all be accessed.

(function (){

    // variables inside are all local to the JS.
fight("billy","bob");
let x = isEven(123915792831);
let y = isEven(99999999999);
console.log(x);
console.log(y);


let person1="billy",
    person2="bob";

fight("billy", "bob")

function fight(person1,person2){
    console.log(person1 + " punched " + person2 + " right in the kisser")
}


function isEven(num){
    // GET PIECES OF THE PUZZLE!!
    // PUTTING PIECES OF THE ALL INTO VARIABLES

    let number = num;
    let answer = (number % 2 ===0)

    //FINALLY RETURN THE ANSWER
     return answer;

}

})();
