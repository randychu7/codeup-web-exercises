(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
console.log(planetsArray.join("<br>"));

// planetsArray.push("</ul>");
// planetsArray.unshift("<ul>");
//   let joinedPlanets = planetsArray.join("<li>");
//     console.log(joinedPlanets);

    const planetSplit = `<ul><li>${planetsString.join('</li><li>')}</li></ul>`
    console.log(planetSplit);

{/*let students = ["Nikolas","Randy","Ricardo"];*/}



{/*    function compareNumbers(a,b) {*/}
{/*        return a-b;*/}
{/*    }*/}

{/*    students.sort();*/}

{/*    console.log(students);*/}

{/*students.reverse();*/}
{/*    console.log(students);*/}

{/*  students.shift();*/}
{/*    console.log(students);*/}
{/*    students.sort();*/}
{/*    console.log(students)*/}

{/*    console.log(students.join(" "));*/}
{/*    console.log(students.join("_"))*/}





   let randomNum = Math.floor(Math.random() * 7 - 1)+2;

    // console.log(randomNum);

        function randomDay(num) {
            switch (num) {
                case 1:
                    return "Monday";
                    break;
                case 2:
                    return "Tuesday";
                    break;
                case 3:
                    return "Wendsday";
                    break;
                case 4:
                    return "Thursday";
                    break;
                case 5:
                    return "Friday";
                    break;
                case 6:
                    return "Saturday";
                    break;
                case 7:
                    return "Sunday";
                    break;
            }
        }

    // console.log(randomDay(randomNum));
    //
    // function letterValue(str){
    //     var anum={
    //         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
    //         l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    //         u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    //     }
    //     if(str.length== 1) return anum[str] || ' ';
    //     return str.split('').map(letterValue);
    // }
    //
    // console.log(letterValue('t'))

    })();