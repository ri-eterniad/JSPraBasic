'use strict';

const x=5;

function scp(){
    const x =1;
    console.log(x);
}

scp();//1
//下記はscpないでしか宣言していない場合エラー
console.log(x)//5

