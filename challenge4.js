// set 2 challenge 2

function isDivisibleByAll(number,max){
    for(let i = 1; i <= max; i++){
        if(number% i!==0){
            return false;
        }
    }
    return true;
}

let num = 20;
while(true){
    if(isDivisibleByAll(num,20)){
        console.log(num);
        break;
    }
    num++;
}