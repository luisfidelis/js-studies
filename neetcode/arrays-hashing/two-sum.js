/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const diffsToSum = {};
    if(nums.length === 2) {
        return [0,1]
    }
    for(let i=0; i < nums.length; i++) {
        if(diffsToSum[nums[i]] !== undefined) {
            return [i, diffsToSum[nums[i]]];
        }
        diffsToSum[target - nums[i]] = i;
    }
};