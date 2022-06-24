/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagramsV1 = function(strs) {
    const charCountMappers = {};
    for(let i=0; i < strs.length; i++) {
        const sortedWord = strs[i].split("").sort().join();
        if(charCountMappers[sortedWord]) {
            charCountMappers[sortedWord].push(strs[i])
        } else {
            charCountMappers[sortedWord] = [strs[i]];
        }
    }
    return Object.values(charCountMappers);
};

var groupAnagrams = function(strs) {
    const charCountMappers = {};
    for(let i=0; i < strs.length; i++) {
        const charMap = Array(26).fill(0);
        for(const char of strs[i]) {
            charMap[char.charCodeAt() - 97] += 1;
        }
        const key = charMap.join("-");
        if(charCountMappers[key]) {
            charCountMappers[key].push(strs[i])
        } else {
            charCountMappers[key] = [strs[i]];
        }
    }
    return Object.values(charCountMappers);
};

