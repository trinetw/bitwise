// function myFunction(text) {
//     // let a = 3;
//     // let b = 2;
//     // let answer = a * b;
//     // console.log(answer);
//     const li = document.createElement('li');
//     li.innerText = text;
//     document.querySelector('body').appendChild(li);
//     li.style.backgroundColor = 'red';
//     li.style.border = '1px solid black';
//     li.style.padding = '10px';
//     li.style.color = 'white';
//     li.style.fontWeight = 'bold';
//     li.style.fontSize = '20px';
// }

// let x = 200;
// let y = 100;
// myFunction('hello');
// myFunction('world'  + '!');
// myFunction(1 + 2);
// myFunction( x > y);
// myFunction( x < y);
// myFunction( x == y);
// myFunction( 'hello' !== 'hello');
// THE ABOVE IS STYLYZING TEXTS


let accountType = prompt('What is your account type?');
console.log(Number(accountType)+ 1)

if (accountType === 'premium') {
    console.log ('Can create public and private repositories and have unlimited collaborators.');
} else if (prompt('Are you on a trial?')){
    console.log ('Can create public and private repositories and have unlimited collaborators for 30 days.');
} else if (prompt('Are you a student?')){
    console.log('Can create public and private repositories and have unlimited collaborators for 6 months.');
} else {
    console.log('You have basic plan and can create public repositories.');
}

