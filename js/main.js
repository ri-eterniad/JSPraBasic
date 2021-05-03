'use strict';

const signal = 'green';

switch(signal){
    case 'red':
        console.log('止まれ');
        break;
    case 'yellow':
        console.log('注意や');
        break;
    case 'blue':
        console.log('進め');
        break;
    default:
        console.log('故障です');
        break;
}

for(let i =1 ;i <=10 ;i++){
    console.log(`hello${i}`);
}

let hp = 100;

while(hp >0){
    console.log(`HP：${hp}`)
    hp -=10
}

hp = -50

do{
    console.log(`HP：${hp}`)
    hp -=10
}while(hp >0)