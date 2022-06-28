


function smallestSubstring(str, pattern) {
    let smallestSubstring = str+"a";
    let smallestSubstringTmp = "";
    let charFrequency = {};
    for(let index=0; index < pattern.length; index++) {
        const char = pattern[index];
        if(!charFrequency[char]) {
            charFrequency[char] = 0;
        }
        charFrequency[char]++;
    }
    let windowStart = 0;
    let matched = 0;
    for(let windowEnd=0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
    } 
    return smallestSubstring === str+"a" ? "" : smallestSubstring;
}


console.log(smallestSubstring("aabdec","abc")) //abdec
console.log(smallestSubstring("aabdec","abac")) //aabdec
console.log(smallestSubstring("abdbca","abc")) //bca
console.log(smallestSubstring("adcad","abc")) //""