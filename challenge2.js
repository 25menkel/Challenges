// set 1 challenge 4

function largestPrimeFactor(n) {
    let factor = 2;
    while (factor <=n) {
        if(n % factor ===0) {
            n= n/factor;
        } else {
            factor++;
        }
    }
    return factor;
}

console.log(largestPrimeFactor(600851475143));