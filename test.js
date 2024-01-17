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

function pattern2(n){
    let p ="";
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        p = p + "*";
    }
    if(i< n-1){
        p = p + "\n";
    }
}
console.log(p);
}

pattern2(5);
