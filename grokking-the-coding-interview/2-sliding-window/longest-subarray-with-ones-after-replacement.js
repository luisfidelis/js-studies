
/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, 
 * find the length of the longest contiguous subarray having all 1s.
 *  
 */


function addNumber(number, map) {
    if(!map[number]) {
        map[number] = 0;
    }
    map[number]++;
}

function removeNumber(number, map) {
    if(!map[number]) {
        map[number] = 0;
    }
    map[number]++;
}

function longestSubArray(arr, k) {
    let windowStart = 0;
    // SPACE: O(1)
    let map = {};
    maxLength = 0;
    max1RepeatCount = 0;
    // O(N)
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const rightValue = arr[windowEnd];
        addNumber(rightValue, map);
        if(rightValue == 1) {
            max1RepeatCount++;
        }
        if(windowEnd - windowStart + 1 - max1RepeatCount > k) {
            const leftValue = arr[windowStart];
            windowStart++;
            removeNumber(leftValue, map);
            if(leftValue == 1) {
                max1RepeatCount--;
            }
        }
        maxLength = windowEnd - windowStart + 1;
    } 
   return maxLength;
}

console.log(longestSubArray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)) // 6
console.log(longestSubArray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)) // 9
