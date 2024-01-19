

//To take input from user via console in javascript

//To get the user’s input from the web browser is easy by using JavaScript prompt() method. 
//However, what is not understandable is using JavaScript which runs only the browser, 
// to get input from a systems command line. Doing this is possible using NodeJS. 
// It will require us to use the readline() package. 
// With this package, we can then accept user input and even output it to the console.

// Syntax
// readline.question(string, callback())

// Parameters
// string: This is normally a question or an interactive word that prompts the user to enter an input.
// callback(): This is a callback function or a call after function that accepts an argument which is the user’s input and does anything with it.

// When you want to use the readline(), the first thing to do is to import the module.
// The next is to create an interface for input and output operations.
// Now, we can proceed to use the .question() method 

const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  r1.question('What is your name?', function (name){
    console.log(`Hello, ${name}!`);
    r1.close();
  });


// function count_digit(n){
// //     1st Approach using ready functions
// //     let str = n.toString();
// //     return str.length

// //     2nd Approach by dividing the number and setting a count variable.
//     let count = 0;
//     while(n!=0){
//         n=Math.floor(n/10);
//         count++;
//     }
//     return count;

// //     3rd Approach by using log10() and then adding 1.
// //     As The number of digits in an integer = the upper bound of log10(n).
// //     let count = Math.floor(Math.log10(n) + 1);
// //     return count;
// }

// console.log(count_digit(n));


