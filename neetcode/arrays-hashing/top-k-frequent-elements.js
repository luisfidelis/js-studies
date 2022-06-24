/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// O(n) => space and time
var topKFrequent = function(nums, k) {
    const map = {};
    const counting = Array(nums.length + 1);
    for(let num of nums) {
        if(map[num]) {
            map[num] += 1
        } else {
            map[num] = 1;
        }
    }   
    Object.keys(map).forEach((num) => {
        const frequency = map[num];
        if(counting[frequency]) {
            counting[frequency].push(parseInt(num))
        } else {
            counting[frequency] = [parseInt(num)]
        }
    });
    let counter = 0;
    const response = [];
    for(let i = counting.length - 1; i >= 0 && counter < k; i --) {
        if(counting[i]) {
            for(let bucketNumber of counting[i]) {
                response[counter] = bucketNumber;
                counter++;
            }
        }
    }
    return response;
};

topKFrequent([1,1,1,2,2,3], 2)