/**
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, 
 *  find the length of the longest substring having the same letters after replacement.
 * 
 */

function addChar(char, map) {
    if(!map[char]) {
        map[char] = 0;
    }
    map[char]++;
}

function removeChar(char, map) {
    map[char]--;
    if(!map[char]){
        delete map[char];
    }
}
// TODO, STUDY THIS CASE IN DEPTH
function longestSubstring(str, k) {
    const map = {};
    let maxLength = 0;
    let windowStart = 0;
    let maxRepeatCharCount = 0;
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        addChar(rightChar, map);
        maxRepeatCharCount = Math.max(maxRepeatCharCount, map[rightChar]);
        if((windowEnd - windowStart + 1 - maxRepeatCharCount) > k) {
            const leftChar = str[windowStart];
            windowStart++;
            removeChar(leftChar, map);
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}


console.log(longestSubstring("aabccbb",2)) // 5
console.log(longestSubstring("abbcb",1)) // 4
console.log(longestSubstring("abccde",1)) // 3