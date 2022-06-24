/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var isAnagram = function(s, t) {
    const charsOfS = {};
    const charsOfT = {};
    if(s.length !== t.length) {
        return false;
    }
    for(let i=0; i < s.length; i++) {
        charsOfS[s[i]] = !charsOfS[s[i]] ? 1 : charsOfS[s[i]] + 1;
        charsOfT[t[i]] = !charsOfT[t[i]] ? 1 : charsOfT[t[i]] + 1;
    }
    return Object.keys(charsOfS).every((sChar) => {
        return charsOfS[sChar] === charsOfT[sChar]
    })
};

var groupAnagramsV1 = function(strs) {
    const anagramGroups = [];
    const words = {}; 
    for(let i=0; i < strs.length; i++) {
        if(words[strs.i]) {
            anagramGroups[words[strs[i]]].push(strs[i])
        } else {
            const hasAnagram = Object.keys(words).some((word) => {
                if(isAnagram(strs[i], word)) {
                    anagramGroups[words[word]].push(strs[i])
                    return true;
                }
                return false;
            })
            if(!hasAnagram) {
                words[strs[i]] = anagramGroups.length;
                anagramGroups.push([strs[i]]);
            }
        }
    }
    return anagramGroups;
};

var groupAnagrams = function(strs) {
    const words = {}; 
    for(let i=0; i < strs.length; i++) {
        if(words[strs[i]]) {
            words[strs[i]].push(strs[i])
        } else {
            const hasAnagram = Object.keys(words).some((word) => {
                if(isAnagram(strs[i], word)) {
                    words[word].push(strs[i])
                    return true;
                }
                return false;
            })
            if(!hasAnagram) {
                words[strs[i]] = [strs[i]]
            }
        }
    }
    return Object.values(words);
};
