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
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function generateArray(n){
    return Array(n).fill(0);
}

function getMax(arr) {  
    let maxValue;
    for(let i = 0; i < arr.length; i++) {
        if(i == 0) {
            maxValue = arr[i];
        } else {
            arr[i] += arr[i - 1];
            if(arr[i] > maxValue) {
                maxValue = arr[i]
            }
        }
    }
    return maxValue;
}

function arrayManipulation(n, queries) {
    // Write your code here
    const arr = generateArray(n + 2);
    queries.forEach((queryEntry) => {
        const leftIndex = queryEntry[0];
        const rightIndex = queryEntry[1];
        const value = queryEntry[2];
        arr[leftIndex] += value;
        arr[rightIndex + 1] -= value;
    })
    return getMax(arr);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + '\n');

    ws.end();
}
