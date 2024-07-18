
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

// const readline = require('readline')

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   r1.question('What is your name? ', function (name){
//     console.log('Hello '+ name +'!');
//     r1.close();
//   });


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


// function count(n){
//     if(n/10 == 0){
//         return 0;
//     }
//     return 1 + count(Math.floor(n/10));
// }
// console.log(count(1234558748))


//Reverse of a number 

// function reverse(n){
    
//     let rev = 0;
//     while(n!=0){
//     let temp = n%10;
//     rev = (rev*10) + temp;
//     n = Math.floor(n/10);
//     }
//     console.log(rev)
// }

// console.log(reverse(54321))

//Palindrome of a number

// function palindrome(n){
//     let x=n;
//     let y=0;
//     while(x>0){
//         let temp = x % 10;
//         y = (y * 10) + temp;
//         x = Math.floor(x / 10);
//     }
//     console.log(y);
//     console.log(x);
//     if(y==n){
//         return "Palindrome Number";
//     }
//     else{
//         return "Not Palindrome Number";
//     }
// }

// console.log(palindrome(12345321));

//GCD (Greatest Common Divisor) OR HCF (Highest Common Factor)

// Brute Force

// function gcd(n1,n2){
//     let gcd=1;
//     for(let i=0; i <= Math.min(n1,n2); i++){
//         if(n1 % i == 0 && n2 % i == 0){
//             gcd=i;
//         }
//     }
//     return gcd;
// }

// TC: O(N), that is minimun of n1 and n2
// SC: O(1)

//Euclidean’s theorem using recurison 

// function gcd(a,b){
// if(b==0) return a;
// return gcd(b,a%b);
// }

// TC: O(Log(min(a,b))), that is minimun of n1 and n2
// SC: O(Log(min(a,b)))

// console.log(gcd(12,24));

//Armstrong Number Problem

// function cal_arm_strong(n){
//     let temp =n;
//     let count =0;
//     let x=n;
//     while(temp!=0){
//         count++;
//         temp = Math.floor(temp / 10);
//     }
//     let sum = 0;
//     while(x!=0){
//         temp = x%10;
//         sum = sum + Math.pow(temp,count);
//         x = Math.floor(x/10);
//     }
//     if(sum == n){
//         return "Armstrong Number !";
//     }
//     return "Not a Armstrong Number !";
// }

// TC: O(N), where n is the number of digits since we need to traverse every digit and add digits raised to power no. of digits to sum.
// SC: O(1)

// console.log(cal_arm_strong(1634));

//Print All the Divisors

//Brute Force 

// function printDivisors(n) {
//     console.log("The Divisors of " + n + " are:");
//     for (let i = 1; i <= n; i++) {
//       if (n % i === 0) {
//         process.stdout.write(i + " ");
//       }
//     }
//     console.log("\n");
//   }

// TC: O(N), it will run till n always.
// SC: O(1)

//Squareroot of number for Optimal solution

// function printDivisors(n) {
//     for(let i=1; (i*i)<=n; i++){
//         if(n%i == 0){
//             console.log(i);
//             if((n/i) != i){
//                 console.log(n/i);
//             }
//         }
//     }
// }

// TC: O(sqrt(n))
// SC: O(1)
  
// printDivisors(97);
  

let n = matrix.length;
let m = matrix[0].length;
let row = new Array(n).fill(0);
let col = new Array(m).fill(0);

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if(matrix[i][j] === 0){
            row[i] = 1;
            col[j] = 1;
        }
    }
}

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        if( row[i] || col[j] ){
            matrix[i][j] = 0;
        }
    }
}
