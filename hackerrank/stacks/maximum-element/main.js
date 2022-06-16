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
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMaxStackElement(stack) {
    let max = null;
    for(let i = 0; i <= stack.length; i++) {
        if(max === null || stack[i] > max) {
            max = stack[i];
        }
    }
    return max;
}

function getMax(operations) {
    // Write your code here
    const stack = [];
    const maxStack = [];
    const maxElements = [];
    operations.forEach((operation) => {
        const queryElements = operation.split(' ');
        const queryOp = parseInt(queryElements[0]); 
        if(queryOp === 1) {
            const newElement = parseInt(queryElements[1]);
            stack.push(newElement);
            if(maxStack.length) {
                const lastMax = maxStack[maxStack.length - 1];
                if(newElement > lastMax) {
                    maxStack.push(newElement)
                } else {
                    maxStack.push(lastMax)
                }
            } else {
                maxStack.push(newElement)
            }
        } else if(queryOp === 2) {
            maxStack.pop();
            stack.pop();
        } else {
            maxElements.push(maxStack[maxStack.length - 1]);
        }
    })
    return maxElements;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let ops = [];

    for (let i = 0; i < n; i++) {
        const opsItem = readLine();
        ops.push(opsItem);
    }

    const res = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
