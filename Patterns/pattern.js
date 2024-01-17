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

function pattern7(n){
    let p ="";
for(let i=0; i<n; i++){
    for(let j=0; j<((n-i)-1); j++){
        p = p + " ";
    }
    for(let j=0; j<((2*i)+1); j++){
        p = p + "*";
    }
    for(let j=0; j<((n-i)-1); j++){
        p = p + " ";
    }
    if(i < n-1){
        p = p + "\n";
    }
}
console.log(p)
}

pattern7(5);
