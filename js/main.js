'use strict';

for(let i =0 ;i<10 ;i++){
    
    if(i%3 === 0){
        continue;
    }
    if(i === 8){
        break;
    }
    console.log(i);
}