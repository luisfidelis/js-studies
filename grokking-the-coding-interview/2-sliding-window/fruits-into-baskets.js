/**
 * You are visiting a farm to collect fruits. The farm has a single row of fruit trees. 
 * You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.
 *  You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:
 *
 * Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
 * You can start with any tree, but you can’t skip a tree once you have started.
 * You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
 * Write a function to return the maximum number of fruits in both baskets. 
 * 
 * 
 */

function registerFruit(fruit, map) {
    if(!map[fruit])  {
        map[fruit] = 0;
    }
    map[fruit]++;
}

function removeFruit(fruit, map) {
    map[fruit]--;
    if(!map[fruit]) {
        delete map[fruit];
    }
}

function fruitsIntoBaskests(fruits, numberOfTypes = 2) {
    let windowStart = 0;
    let fruitFrequencyMap = {};
    let maxLength = 0;
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const fruit = fruits[windowEnd];
        registerFruit(fruit, fruitFrequencyMap);
        while(Object.keys(fruitFrequencyMap).length > numberOfTypes) {
            const fruit = fruits[windowStart];
            windowStart++;
            removeFruit(fruit, fruitFrequencyMap);
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(fruitsIntoBaskests(['A', 'B', 'C', 'A', 'C'])) // 3
console.log(fruitsIntoBaskests(['A', 'B', 'C', 'B', 'B', 'C'])) // 5