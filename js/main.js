'use strict';

// function sum(a,b,c){
//     // console.log(a + b + c);
//     return a + b+ c ;
// }

//定数関数に書き換えると

// const sum =function (a,b,c){
//     // console.log(a + b + c);
//     return a + b+ c ;
// };

//アロー関数
// const sum =(a,b,c)=>{
//      return a + b+ c ;
// };

//さらに短く
const sum =(a,b,c)=>a + b+ c ;

const total =sum(2,3,4) + sum(9,4,4);
console.log(total);

// const double = function(a){
//     return a*2;
// };
//書き換えると
const double = a => a*2;

console.log(double(12));