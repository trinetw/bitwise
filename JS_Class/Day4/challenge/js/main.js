let q1 = prompt('Please input a number:');
let q2 = prompt('Please input another number:');

function numbertest(q1, q2) {
    if (q1 < q2) {
        // alert("Your first number is smaller."); Failed attempt
        alert(parseFloat(q1)+ ' is smaller than ' + parseFloat(q2));
    } else if (q1 === q2){
        alert(parseFloat(q1)+ ' is equal ' + parseFloat(q2));
    } else if (q1 > q2) {
        alert(parseFloat(q1)+ ' is larger than ' + parseFloat(q2));
    }
    else {
        console.log('Idk');
    }
}
function compare(){
    if (isNaN(q1, q2)) {
        alert('PLEASE! Give me a real number *stare*:');
        recurse(question);
    } else {
        numbertest(q1, q2);
    }
}
compare();