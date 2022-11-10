// let selectedCharacter = undefined

// let falsey = [null, undefined, false, 0, 'empty string']




// const myUniqueValue = Symbol('myUniqueValue');
// const myUniqueValueClone = Symbol('myUniqueValue');
// console.log(myUniqueValue === myUniqueValueClone);

// const myUniqueObject = {
//     [myUniqueValue]: 'secret',
//     [myUniqueValueClone]: 'secret2',
// }

// console.log(myUniqueObject[myUniqueValueClone])

// let myAlert= alert('Is the answer 42?');
// let myConfirm = confirm('Are you sure?');
// let myPrompt = prompt("what is your name");

// console.log(myAlert, myConfirm, myPrompt)


// function askQuestion(){
//     let color = prompt('What color?');
//     console.log(color);
//     document.querySelector('body').style.backgroundColor = color;
// }

// window.addEventListener('mousemove', function(event){
//     console.log(event);
//     document.querySelector('body').style.backgroundColor = `rgb(${event.clientX},  )`

// })

const colors = ['red', 'blue', 'yellow', 'black'];
const index = Math.floor(Math.random() * colors.length);
console.log(colors[index]);