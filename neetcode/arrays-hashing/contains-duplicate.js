/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const numbersMap = {};
    let containsDuplicate = false;
    for(let i=0; i < nums.length; i++) {
        if(numbersMap[nums[i]] !== undefined) {
            containsDuplicate = true;
            break;
        } else {
            numbersMap[nums[i]] = true;
        }
    }
    return containsDuplicate
};