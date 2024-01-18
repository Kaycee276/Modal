'use strict';

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can Drive :D')


 

function logger() {
    console.log("My name is Kaycee"); 
}
// calling / running / invoking
logger();
logger();
logger();



// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice); 


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);




// //function declaration
// function calcAge1(birthYear) {
//     const age = 2023 - birthYear;
//     return age; 
// }
//  const age1 = calcAge1(1991);
//  console.log(age1);
// // or
// // function calcAge0(birthYeah) {
// //     return 2023 - birthYeah;
// // }
// //  const age0 = calcAge0(2006);
// //  console.log(age0);



//  //function expression
//  const calcAge2 = function (birthYeah){
//     return 2023 - birthYeah
//  }
//  const age2 = calcAge2(2004);
//  console.log(age0, age1, age2);


 // arrow function
 const addnum = hundred =>  17 + birthy;
 const birthy = 2006;
 console.log(addnum());



 var subnum = fifty => 2037 - birthy;
 
 console.log(subnum());

 const yearsUntilRetirement = (birthy, firstName)=> {
    const age = 2023 - birthy;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`;
 }
 console.log(yearsUntilRetirement(2006, 'Kaycee'));
 console.log(yearsUntilRetirement(2011, 'David'));
 console.log(yearsUntilRetirement(2000, 'Onyinye'));
 console.log(yearsUntilRetirement(2004, 'Makuo'));

//functions calling other functions

function cutPieces (fruit) {
    return fruit * 9;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges)

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

function multriple(times) {
    return times * 9;
}
function pythagoreas (opp, adj, hyp) {
    const opptimes = multriple(opp);
    const adjtimes = multriple(adj);
    const hyptimes = multriple(hyp);
    const triple = `Triangle with ${opptimes} as opposite ${adjtimes} as adjacent and ${hyptimes} as hypothenuse`;
    return triple;
}
console.log(pythagoreas(3, 4, 5));


let date = "May 22nd"
function colon() {
    if (date == "May 22nd") {
        console.log("Happy Birthday to Me")
    };
};
console.log(colon());
