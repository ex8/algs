// 1 - https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  if (target == null) return []
  const N = nums.length
  if (!Array.isArray(nums) || N < 2) return []
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if ((nums[i] + nums[j]) === target) return [i, j]
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumFast(nums, target) {
  if (target == null) return []
  const N = nums.length
  if (!Array.isArray(nums) || N < 2) return []
  const m = {}
  for (let i = 0; i < N; i++) {
    const n = nums[i]
    const diff = target - n
    if (m[diff] != null) return [m[diff], i]
    m[n] = i
  }
  return []
}

// tests
// console.log(twoSum([]))                   // []
// console.log(twoSum([], 10))               // []
// console.log(twoSum([1], 2))               // []
// console.log(twoSum([2, 7, 11, 15], 9))    // [0,1]
// console.log(twoSum([3, 2, 4], 6))         // [1,2]
// console.log(twoSum([3, 3], 6))            // [0,1]
// console.log(twoSum([11, 7, 15, 2], 9))    // [1,3]

console.log(twoSumFast([]))                   // []
console.log(twoSumFast([], 10))               // []
console.log(twoSumFast([1], 2))               // []
console.log(twoSumFast([2, 7, 11, 15], 9))    // [0,1]
console.log(twoSumFast([3, 2, 4], 6))         // [1,2]
console.log(twoSumFast([3, 3], 6))            // [0,1]
console.log(twoSumFast([11, 7, 15, 2], 9))    // [1,3]
