/**
 * Problem: Given an array, find the average of all subarrays of 'K' contiguous elements in it.
 * 
 */


// --- Bad Solution

function find_averages_bad(k, arr) {
    const result = [];
    for(let i=0; i < arr.length - k + 1; i++) {
        let sum = 0.0;
        for(let j=i; j < i + k; j++) {
            sum += arr[j];
        }
        result[i] = sum / k;
    }
    return result;
}


// --- efficient Solution

function find_averages_eficient(k, arr) {
    const result = [];
    let windowSum = 0.0;
    let windowStart=0;
    for(let windowEnd=0; windowEnd < arr.length - k + 1; windowEnd++) {
        windowSum += arr[windowEnd]
        if(windowEnd >= k - 1) {
            result.push(windowSum/k);
            windowSum -= arr[windowStart]; //subtract the element
            windowStart += 1; // slide window ahead
        }
    }
    return result;
}