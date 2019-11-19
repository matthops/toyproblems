// 13. Roman to Integer
// Easy

// 1554

// 2991

// Favorite

// Share
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4
// Example 3:

// Input: "IX"
// Output: 9
// Example 4:

// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var romanToInt = function(s) {
  const stringToArr = s.split('');
  let newArr = [];
  for (var i = 0; i < stringToArr.length; i++) {
    newArr.push(romanTable[stringToArr[i]]);
  }
  if (newArr.length === 1) {
    return newArr[0];
  }
  let totalArr = newArr[0] >= newArr[1] ? [newArr[0]] : [];

  for (var j = 1; j < newArr.length; j++) {
    if (newArr[j] <= newArr[j - 1] && newArr[j] >= newArr[j + 1]) {
      totalArr.push(newArr[j]);
    } else if (newArr[j] > newArr[j - 1]) {
      totalArr.push(newArr[j] - newArr[j - 1]);
    } else if (
      (j !== 0 && newArr[j] >= newArr[j - 1]) ||
      j === newArr.length - 1
    ) {
      totalArr.push(newArr[j]);
    }
  }

  let total = 0;
  for (var x = 0; x < totalArr.length; x++) {
    total = total + totalArr[x];
  }
  return total;
};

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
