/**
 * Given a string, find the length of the longest substring, which has all distinct characters.
 */


function addChar(char, map) {
    if(!map[char]) {
        map[char] = 0;
    }    
    map[char]++;
}

function removeChar(char, map) {
    map[char]--;
    if(!map[char]) {
        delete map[char];
    }
}

function longestSubstring(str) {
    let maxLength = 0;
    let windowStart = 0;
    // Space: O(1), because in the worst case we put the whole string in the hashmap, but, this number is expected to be between 0 and 26 (number of valid chars in English Letters).
    let charMap = {};
    // O(N)
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];
        addChar(char, charMap);
        // O(N)
        while(
            charMap[char] >= 2
        ) {
            const leftChar = str[windowStart];
            windowStart++;
            removeChar(leftChar, charMap);
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(longestSubstring("aabccbb")) // 3
console.log(longestSubstring("abbbb")) // 2
console.log(longestSubstring("abccde")) // 3
console.log(longestSubstring("aaaae")) // 2