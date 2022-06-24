/**
 * @param {string[]} strs
 * @return {string[][]}
 */


const getCharCountMap = (str) => {
    const charCountMap = {};
    for(let i=0; i < str.length; i++) {
        charCountMap[str[i]] = charCountMap[str[i]] ? charCountMap[str[i]] + 1 : 1; 
    }
    return charCountMap;
}

const isEqualCharMap = (charMap1, charMap2) => {
    return Object.keys(charMap1).every((char) => {
        return charMap1[char] === charMap2[char]
    });
}

var groupAnagrams = function(strs) {
    const charCountMappers = {};
    const groups = [];
    for(let i=0; i < strs.length; i++) {
        const charMap = getCharCountMap(strs[i]);
        const hasAnagram = Object.keys(charCountMappers).some((word) => {
            const mapper = charCountMappers[word];
            if(word.length !== strs[i].length) {
                return false;
            }
            if(isEqualCharMap(charMap, mapper.charMap)) {
                groups[mapper.groupIndex].push(strs[i]);
                return true;
            }
            return false;
        });
        if(!hasAnagram) {
            charCountMappers[strs[i]] = {
                groupIndex: groups.length,
                charMap
            }
            groups.push([strs[i]])
        }
    }
    return groups;
};

