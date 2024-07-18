// Pattern 1 ->
//   *****
//   *****
//   *****
//   *****
//   *****

// function pattern(n){
//     let p ="";
// for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//         p = p + "*";
//     }
//     if(i< n-1){
//         p = p + "\n";
//     }
// }
// console.log(p);
// }

// Pattern 2 ->
// *
// **
// ***
// ****
// *****

// function pattern2(n){
//     let p ="";
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         p = p + "*";
//     }
//     if(i< n-1){
//         p = p + "\n";
//     }
// }
// console.log(p);
// }

// Pattern 3 ->
// 1
// 12
// 123
// 1234
// 12345

// function pattern3(n){
//     let p ="";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         p = p + j;
//     }
//     if(i < n){
//         p = p + "\n";
//     }
// }
// console.log(p);
// }

//Pattern 4
// 1
// 22
// 333
// 4444
// 55555

// function pattern4(n){
//     let p ="";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         p = p + i;
//     }
//     if(i < n){
//         p = p + "\n";
//     }
// }
// console.log(p);
// }

// Pattern 5
// *****
// ****
// ***
// **
// *

// function pattern5(n){
//     let p ="";
// for(let i=0; i<n; i++){
//     for(let j=n; j>i; j--){
//         p = p + "*";
//     }
//     if(i < n-1){
//         p = p + "\n";
//     }
// }
// console.log(p);
// }

// Pattern 6
// 12345
// 1234
// 123
// 12
// 1

// function pattern6(n){
// let p ="";

// my solution to solve the problem 

// for(let i=n; i>0; i--){
//     for(let j=1; j<=i; j++){
//         p = p + j;
//     }
//     if(i > 1){
//         p = p + "\n";
//     }
// }

//but this solution might also work

// for(let i=0; i<n; i++){
//     for(let j=n; j>i; j--){
//         p = p + ((n - j)+ 1);
//     }
//     if(i < n - 1){
//         p = p + "\n";
//     }
// }

// console.log(p);
// }

// Pattern 7
//     *
//    ***
//   *****
//  *******
// *********

// As we can clearly observe that for each row there are some spaces that get printed then some stars and then again some spaces giving it a final pyramidal look. 
// For eg: In the first row (i=0) there are 4 spaces, 1 star, then again 4 spaces. 
// In the second row (i=1) there are 3 spaces, 3 stars, then again 3 spaces 
// so we can say that there are N-i-1 spaces, 2*i+1 stars, and then again N-i-1 spaces for each row where i is the row index. 
// We thus simply run 3 inner loops first for printing the spaces, then the stars, and then the spaces again.

// function pattern7(n){
//     let p ="";
// for(let i=0; i<n; i++){
//     for(let j=0; j<((n-i)-1); j++){
//         p = p + " ";
//     }
//     for(let j=0; j<((2*i)+1); j++){
//         p = p + "*";
//     }
//     for(let j=0; j<((n-i)-1); j++){
//         p = p + " ";
//     }
//     if(i < n-1){
//         p = p + "\n";
//     }
// }
// console.log(p)
// }

// pattern7(5);

// var num = Number("0x11");

// const arr = ['z' , 'a', 'd', 'b', 'e'];
// let temp = arr[0].charCodeAt();
// let temp;
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i].charCodeAt() > arr[j].charCodeAt()){
//            temp = arr[i];
//            arr[i] = arr[j];
//            arr[j] = temp;
//         }
//     }
// }

// for(var a = 0; a < 5; a++){
//     setTimeout(() => console.log(a), 5000);
//   }
  
//Using IIFE (Immediately Invoked Function Expression) to solve problem of var type variable
  for(var a = 0; a < 5; a++){
    (function(a){
        setTimeout(() => {
          console.log(a)
        }, a * 1000)
      })(a)
  }
  
  