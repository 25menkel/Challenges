// set 2 challenge 2

function isDivisibleByAll(number,max){
    for(leti=1;i<=max;i++){
        if(number% i!==0){
            return false;
        }
    }
    return true;
}