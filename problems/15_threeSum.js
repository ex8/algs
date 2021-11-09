const { BinarySearch } = require('../algs')

// 15 - https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number}
 */
function threeSum(nums) {
  if (nums == null || !Array.isArray(nums)) return 0
  const N = nums.length
  let c = 0
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        if (i !== j && i !== k && j !== k) {
          if (nums[i] + nums[j] + nums[k] === 0) c++
        }
      }
    }
  }
  return c
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function threeSumFast(nums) {
  if (nums == null || !Array.isArray(nums)) return 0
  nums.sort((a, b) => a - b)
  let c = 0
  const N = nums.length
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (BinarySearch.rankIterative(-nums[i] - nums[j], nums) > j) c++
    }
  }
  return c
}

// tests
// console.log(threeSum())                       // 0
// console.log(threeSum('aa'))                   // 0
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))  // 3
// console.log(threeSum([]))                     // 0
// console.log(threeSum([0]))                    // 0

console.log(threeSumFast())                       // 0
console.log(threeSumFast('aa'))                   // 0
console.log(threeSumFast([-1, 0, 1, 2, -1, -4]))  // 3
console.log(threeSumFast([]))                     // 0
console.log(threeSumFast([0]))                    // 0
