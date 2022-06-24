/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramV1 = function(s, t) {
    const charsOfS = {};
    const charsOfT = {};
    if(s.length !== t.length) {
        return false;
    }
    for(let i=0; i < s.length; i++) {
        charsOfS[s[i]] = !charsOfS[s[i]] ? 1 : charsOfS[s[i]] + 1;
    }
    for(let j=0; j < t.length; j++) {
        if(!charsOfS[t[j]]) {
            return false;
        }
        charsOfT[t[j]] = !charsOfT[t[j]] ? 1 : charsOfT[t[j]] + 1;
        if(charsOfT[t[j]] > charsOfS[t[j]]) {
            return false;
        }
    }
    return Object.keys(charsOfS).every((sChar) => {
        return charsOfS[sChar] === charsOfT[sChar]
    })
};

var isAnagramV2 = function(s, t) {
    const chars = {};
    if(s.length !== t.length) {
        return false;
    }
    for(let i=0; i < s.length; i++) {
        chars[s[i]] = !chars[s[i]] ? 1 : chars[s[i]] + 1;
    }
    for(let j=0; j < t.length; j++) {
        if(!chars[t[j]]) {
            return false;
        }
        chars[t[j]] = chars[t[j]] - 1;  
        if(chars[t[j]] < 0) {
            return false;
        }
    }
    return Object.keys(chars).every((char) => {
        return chars[char] == 0;
    })
};

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