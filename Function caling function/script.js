'use strict'

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3)); 










function pythagoreas(triple) {
    return triple * 2;
}

function pytho(opp, adj, hyp){

    const oppPiece = pythagoreas(opp);
    const adjPiece = pythagoreas(adj);
    const hypPiece = pythagoreas(hyp);

    const theorem = `Triangle with ${oppPiece} as opposite, ${adjPiece} as adjacent and ${hypPiece} as hypothenuse`;
    return theorem;
}

console.log(pytho(3, 4, 5));




const yearsUntilRetirement  = function (birthYear, firstName) {
    const age = 2023 - birthYear;
    const retirement = 65 - age;


    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        
        return `${firstName} retired ${Math.abs(retirement)} years ago`;
        
    }
}

console.log(yearsUntilRetirement(2006, 'Kelechi'));
console.log(yearsUntilRetirement(1959, 'David'));




const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));


let scoreDolphins = calcAverage(44 ,23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
function checkWinner (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        return `The Dolphins win ${avgDolphins} to ${avgKoalas}` 
    } else if(avgKoalas >= 2 * avgDolphins){
        return `The Koalas win ${avgKoalas} to ${avgDolphins}`
    } else{
        return 'It is a tie'
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
// console.log(checkWinner(500, 100));

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas))















