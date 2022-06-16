'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    const hourGlasses = [];
    let maxHourglassSum = null;
    for(let j = 0; j <= arr.length - 3; j++) {
        for(let i = 0; i <= arr.length - 3; i++) {
            const line1Sum = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            const line2Sum = arr[i+1][j+1];
            const line3Sum = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            const currentSum = line1Sum + line2Sum + line3Sum;
            if(maxHourglassSum === null || maxHourglassSum < currentSum) {
                maxHourglassSum = currentSum;
            }
        }
    }
    return maxHourglassSum;
}

 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
