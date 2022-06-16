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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced_symetric_string(s) {
    // Write your code here
    const stack = s.split('');
    if(stack.length % 2 !== 0) {
        return 'NO'
    }
    let isBalanced = true;
    for(let i = 0; i < stack.length / 2 - 1; i++) {
        if(!['{', '(', '['].includes(stack[i])) {
            return 'NO'
        }
        let matchingChar;
        switch(stack[i]) {
            case '{':
                matchingChar = '}';
                break;
            case '(':
                matchingChar = ')';      
                break;
            case '[':
                matchingChar = ']';      
                break;
        }
        if(stack[stack.length - (1 + i)] !== matchingChar) {
            isBalanced = false;
            return 'NO';
        }
    }
    return 'YES';
}



function isBalanced(s) {
    const oppeningBracketsStack = [];
    const matchingChars = {
        '{' : '}',
        '}' : '{',
        '[' : ']',
        ']' : '[',
        '(' : ')',
        ')' : '(',
    };
    // Write your code here
    const stack = s.split('');
    if(stack.length % 2 !== 0) {
        return 'NO'
    }
    function isOpeningBracket(char) {
        return ['{', '(', '['].includes(char);
    }
    for(let i = 0; i < stack.length; i++) {
        if(isOpeningBracket(stack[i])) {
            oppeningBracketsStack.push(stack[i])
        } else {
            if(!oppeningBracketsStack.length) {
                return 'NO'
            }
            if(matchingChars[stack[i]] !== oppeningBracketsStack.pop()) {
                return "NO"
            }
        }
    }
    return !oppeningBracketsStack.length ? "YES" : "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
