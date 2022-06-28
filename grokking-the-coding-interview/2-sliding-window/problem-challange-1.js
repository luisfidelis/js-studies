
function hasPermutationV1(str, pattern) {
    function isAnagram(substr, pattern) {
        const charsOfSubstr = {};
        const charsOfPattern = {};
        if(substr.length !== pattern.length) return false;
        for(let i=0; i < pattern.length; i++) {
            charsOfSubstr[pattern[i]] = charsOfSubstr[pattern[i]] ? charsOfSubstr[pattern[i]]++ : 1;
            charsOfPattern[substr[i]] = charsOfPattern[substr[i]] ? charsOfPattern[substr[i]]++ : 1;
        }
        return Object.keys(charsOfPattern).every((char) => charsOfPattern[char] === charsOfSubstr[char]);
    }
    const windowLength = pattern.length;
    let substr = "";
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        substr = substr + str[windowEnd];
        if(windowEnd >= windowLength) {
            substr = substr.substring(1, substr.length);
        }
        if(isAnagram(substr, pattern)) {
            return true;
        }
    }
    return false;
}

function hasPermutation(str, pattern) {
    const charFrequency = {};
    for(let i = 0; i < pattern.length; i++) {
        if(!charFrequency[pattern[i]]) {
            charFrequency[pattern[i]] = 0;
        }
        charFrequency[pattern[i]]++;
    }
    let matched = 0;
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if(charFrequency[str[windowEnd]]) {
            charFrequency[str[windowEnd]]--;
        }
        if(charFrequency[str[windowEnd]] === 0) {
            matched++;
        }
        if(matched === Object.keys(charFrequency).length) {
            return true;
        }
        if(windowEnd >= pattern.length - 1) {
            if(str[windowStart] in charFrequency) {
                if(!charFrequency[str[windowStart]]) {
                    matched--;
                }
                charFrequency[str[windowStart]]++;
            }
            windowStart++;
        }
    }
    return false;
}



console.log(hasPermutation("oidbcaf","abc")) // true
console.log(hasPermutation("odicf","dc")) // false
console.log(hasPermutation("bcdxabcdy","bcdyabcdx")) // true
console.log(hasPermutation("aaacb","abc")) // true
console.log(hasPermutation("bca","abc")) // true
