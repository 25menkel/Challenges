// set 1 challenge 2

function squareDiff(n, numbers) {
    let mainDiagonal = 0;
    let otherDiagonal = 0; 

    for (let i = 0;i<n;i++) {
        mainDiagonal += numbers[i*n+i];
        otherDiagonal += numbers[i*n+(n-1-i)];
    }

    let difference = Math.abs(mainDiagonal-otherDiagonal);
    return difference;
}

console.log(squareDiff(3,[11,2,4,4,5,6,10,8,-12]));