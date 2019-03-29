/* jslint esversion:6 */

//functions - block of code you can assign a name to that you can use over and over again

function add(a, b) {                //function called in the normal way
    return a + b;
}

const subtract = function(a, b) {   //anonymous function, for really
    return a - b;                   //short operations
}

const multiply = (a, b) => a * b;   //arrow notation - quick                                               //replacement of anonymous function

const multiplyTwo = (a, b) => console.log(a * b);   //notice console.log is a function! 

function divide(a, b = 2/*default value - if second variable isn't provided*/) {
    return a / b;
}


//can use a function on an array^^^

const log = (a) => console.log(`value of a is: ${a}`);

const sumar = add; //assigns the add function to the variable sumar
const AGE = 65;

console.log(AGE); // logs 65
console.log(add(7, 8)); //15
console.log(add('hello, ', 'world!'));  //'hello, world!'
console.log(typeof add);    // function
console.log(sumar('hello, ', 'world!'));  //'hello, world!'
console.log(sumar); // logs [function: add] (if you don't add parameters, it'll return the function itself)
console.log(sumar());// logs NaN
multiplyTwo(56, 29);
log();
console.log(divide(8, 4, 3));
console.log(divide(8, 4, ));
console.log(divide(8));
