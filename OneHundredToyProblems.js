// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//My solution:

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var x = 0; x < nums.length; x++) {
      if (x !== i && nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
};

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
  let numArr = [...(x + '')];
  let reverseArr = [];
  for (var i = numArr.length - 1; i >= 0; i--) {
    reverseArr.push(parseInt(numArr[i]));
  }
  const finalInt = parseInt(reverseArr.join(''));

  if (finalInt > 2147483648) {
    return 0;
  }
  return finalInt * Math.sign(x);
};
