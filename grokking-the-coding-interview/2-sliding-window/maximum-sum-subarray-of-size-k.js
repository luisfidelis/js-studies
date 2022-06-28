/**
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 */

// space = O(1)
function maxSum(arr, k){
    let maxSum = -1;
    let windowStart = 0;
    let windowSum = 0.0;
    // O(N)
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if(windowEnd >= k) {
            windowSum -= arr[windowStart];
            if(windowSum > maxSum) {
                maxSum = windowSum;
            }
            windowStart += 1;
        }
    }
    return maxSum;
}

console.log(maxSum([6,1,2,3,4,5,2], 2));
 
