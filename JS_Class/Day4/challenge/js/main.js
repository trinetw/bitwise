let q1 = prompt('Please input a number:');
let q2 = prompt('Please input another number:');



if (q1 < q2) {
    alert("Your first number is smaller.");
} else if (q1 === q2){
    alert('Two numbers are equal.');
} else if (q1 > q2) {
    alert('Your first number is bigger')
} else {
    console.log('Are you sure this is a number?')
}