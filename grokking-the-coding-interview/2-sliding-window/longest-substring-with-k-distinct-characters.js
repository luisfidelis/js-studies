/**
 * 
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * You can assume that K is less than or equal to the length of the given string.
 * 
 */

function registerCharFreq(charFreqTable, char) {
    if(charFreqTable[char]) {
        charFreqTable[char] += 1
    } else {
        charFreqTable[char] = 1;
    }
}

function subtractCharFreq(charFreqTable, char) {
    charFreqTable[char] -= 1;
    if(!charFreqTable[char]) {
        delete charFreqTable[char];
    }
}

function longestSubstring(str, k) {
    let maxLength = 0;
    let windowStart = 0;
    // SPACE: O(K) : Storing K+1 characters on HashMap
    const charFreqTable = {};
    // O(N)
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const currentChar = str[windowEnd];
        registerCharFreq(charFreqTable, currentChar);
        // O(N)
        while(Object.keys(charFreqTable).length > k) {
            const leftChar = str[windowStart];
            windowStart++;
            subtractCharFreq(charFreqTable, leftChar);
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}


console.log(longestSubstring("araaci", 2)) // 4
console.log(longestSubstring("araaci", 1)) // 2
console.log(longestSubstring("cbbebi", 3)) // 5