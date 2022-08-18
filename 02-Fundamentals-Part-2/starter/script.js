'use strict'
// * Function
//function declaration
// const age1 = (calcAge1(1991));

// function calcAge1(birthYeah){
//     return 2037 - birthYeah;
// }
// //function expression
// const calcAge2 = function (birthYeah){
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991)

// console.log(age1,age2);

// // Q1 what diffience with function declaration and function expression

// * Arrow Function

// const calcAge3 = birthYeah => 2022 - birthYeah
// const age3 = calcAge3(1996)
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2022 - birthYeah;
//     const retirment = 65 - age;
//     // return retirment;
//     return `${firstName} retires in ${retirment} years`
// }
// console.log(yearsUntilRetirement(1996,'Ra9c'))

//Q1 What time to use what kind of function


// function cutFruitPieces(fruit){
//     return fruit * 4;

// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces =cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//
const yearsUntilRetirement = (birthYeah, firstName) => {
        const age = 2022 - birthYeah;
        const retirment = 65 - age;
        // return retirment; // 
        return `${firstName} retires in ${retirment} years`
    }