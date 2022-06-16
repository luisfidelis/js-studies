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
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */


function equalStacks(h1, h2, h3) {
    // Write your code here
    let currSizeH1 = 0, currSizeH2 = 0, currSizeH3 = 0;
    let accumH1 = [], accumH2 = [], accumH3 = [];
    for(let i = h1.length - 1; i >= 0; i--) {
        currSizeH1 += h1[i];
        accumH1.push(currSizeH1)
    } 
    for(let i = h2.length - 1; i >= 0; i--) {
        currSizeH2 += h2[i];
        accumH2.push(currSizeH2)
    } 
    for(let i = h3.length - 1; i >= 0; i--) {
        currSizeH3 += h3[i];
        accumH3.push(currSizeH3)
    }
    let maxHeight = 0;
    while(accumH1.length && accumH2.length && accumH2.length) {
        const heightH1 = accumH1.slice(-1).pop();
        const heightH2 = accumH2.slice(-1).pop();
        const heightH3 = accumH3.slice(-1).pop();
        if(heightH1 == heightH2 && heightH2 == heightH3 ) {
            maxHeight = heightH1;
            break;
        }
        if(heightH1 >= heightH2 && heightH1 >= heightH3) {
            accumH1.pop();
        } else if(heightH2 >= heightH1 && heightH2 >= heightH3) {
            accumH2.pop();
        } else if(heightH3 >= heightH1 && heightH3 >= heightH2) {
            accumH3.pop();
        }
    }
    return maxHeight;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
