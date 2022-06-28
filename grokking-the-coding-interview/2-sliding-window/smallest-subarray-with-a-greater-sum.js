
/**
 *  Given an array of positive numbers and a positive number ‘S,’
 *  find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
 *  Return 0 if no such subarray exists. 
 */

// Space = O(1)

function smallestSubArray(arr, S) {
    let smallestLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;
    // O(N)
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        // O(N)
        while(windowSum >= S) {
            smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    // O(N + N) = O(N)
    return smallestLength === Infinity ? 0 : smallestLength;
}

console.log(smallestSubArray([2, 1, 5, 2, 3, 2], 7)) // 2
console.log(smallestSubArray([2, 1, 5, 2, 8], 7)) // 1
console.log(smallestSubArray([3, 4, 1, 1, 6], 8)) // 3