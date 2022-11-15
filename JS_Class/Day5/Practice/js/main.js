// const player1 = 'Mario';
// const player2 = 'Lugi';

// let score = 0;

// let isPaused = false;

// const players = [player1, player2];

// const game = {
//     level: 1, // property-key: value - prefered for objects
//     score: 0, // property is a variable that is a part of an object
//     player: player1,
//     isPaused: false,
//     players: players,
// };

// //bracket notation
// console.log(game['level']);
// //dot notation can be only usedd on objects
// console.log(game.player);
// //bracket can be used on objects and arrays
// console.log(player[0]);

// // organize
// const myArray = {
//     0: player1,
//     1: player2,
// };

// console.log[myArray[0]]

function myFunction(param1, param2){
    console.log('hello world', param1, param2);
    return `hello ${param1} and ${param2}`; 
}
const sentence = myFunction('Mario', 'Luigi');
console.log(sentence);

// arrow functions
() => {}; //shorthand for anonymous function
const myArrowFunction = (param1) => 1+1;

[1, 2, 3].