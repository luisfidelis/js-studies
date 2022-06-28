
/**
    Given a string and a pattern, find all anagrams of the pattern in the given string.

    Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, 
    we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:
    abc
    acb
    bac
    bca
    cab
    cba
    Write a function to return a list of starting indices of the anagrams of the pattern in the given string.
 */

    // fixed window size

function stringAnagramsV1(str, pattern) {
    function isAnagram(substr, pattern) {
        let charFreqPattern = {}, charFreqSubstr = {};
        if(substr.length !== pattern.length) {
            return false;
        }
        for(let index = 0; index < pattern.length; index++) {
            charFreqPattern[pattern[index]] = charFreqPattern[pattern[index]] ? charFreqPattern[pattern[index]]++ : 1;
            charFreqSubstr[substr[index]] = charFreqSubstr[substr[index]] ? charFreqSubstr[substr[index]]++ : 1;  
        }
        return Object.keys(charFreqPattern).every((char) => {
            return charFreqPattern[char] === charFreqSubstr[char];
        });
    }
    const anagramIndexes = [];
    let substr = "";
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        substr += str[windowEnd];
        if(windowEnd >= pattern.length) {
            substr = substr.substring(1);
        }
        if(isAnagram(substr, pattern)) {
            anagramIndexes.push(windowEnd - pattern.length + 1);
        }
    }
    return anagramIndexes;
}

// variable window size
function stringAnagrams(str, pattern) {
    let matched = 0;
    // Space: O(N)
    let anagramIndexes = [];
    // Space: O(1)
    let charFrequency = {};
    // Space: O(1 + N) = O(N)
    // O(P)
    for(let i = 0; i < pattern.length; i++) {
        if(!charFrequency[pattern[i]]) {
            charFrequency[pattern[i]] = 0;
        }
        charFrequency[pattern[i]]++;
    }

    let windowStart = 0;
    // O(N)
    // assuming N >= P, O(N)
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if(str[windowEnd] in charFrequency) {
            charFrequency[str[windowEnd]]--;
        }
        if(charFrequency[str[windowEnd]] === 0) {
            matched++;
        }
        if(matched === Object.keys(charFrequency).length) {
            anagramIndexes.push(windowStart);
        }
        if(windowEnd >= pattern.length - 1) {
            if(str[windowStart] in charFrequency) {
                if(charFrequency[str[windowStart]] === 0) {
                    matched--;
                }
                charFrequency[str[windowStart]]++;
            }
            windowStart++;
        }
    }
    return anagramIndexes;
}

console.log(stringAnagrams("ppqp", "pq"))// [1,2]
console.log(stringAnagrams("abbcabc", "abc"))// [2,3,4]
