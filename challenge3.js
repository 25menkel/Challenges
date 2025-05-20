// set 2 challenge 1

let sum = 0;
let sumOfSquares=0;

for(let i = 1;i<=100;i++) {
    sum += i;
    sumOfSquares += i*i;
}

let squareOfSum = sum*sum;
let difference = squareOfSum - sumOfSquares;

console.log(difference);