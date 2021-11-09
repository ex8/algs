// 4 - https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  if (nums1 == null && nums2 == null) return
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return
  if (nums1.length === 0 && nums2.length === 0) return 0
  const merged = nums1.concat(nums2).sort((a, b) => a - b)
  const N = merged.length
  const mid = Math.floor(N / 2)
  if (N % 2 === 1) return merged[mid]
  else return (merged[mid] + merged[mid - 1]) / 2
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArraysFast(nums1, nums2) {
  if (nums1 == null && nums2 == null) return
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return
  if (nums1.length === 0 && nums2.length === 0) return 0
  const N = nums1.length
  const M = nums2.length
  if (N < M) return findMedianSortedArraysFast(nums2, nums1)
}

// tests
// console.log(findMedianSortedArrays(1, 'a'))             // undefined
// console.log(findMedianSortedArrays([], []))             // 0
// console.log(findMedianSortedArrays([], [1]))            // 1
// console.log(findMedianSortedArrays([2], []))            // 2
// console.log(findMedianSortedArrays([1, 3], [2]))        // 2
// console.log(findMedianSortedArrays([1, 2], [3, 4]))     // 2.5
// console.log(findMedianSortedArrays([1, 2], [1, 3, 4]))  // 2

console.log(findMedianSortedArraysFast(1, 'a'))             // undefined
console.log(findMedianSortedArraysFast([], []))             // 0
console.log(findMedianSortedArraysFast([], [1]))            // 1
console.log(findMedianSortedArraysFast([2], []))            // 2
console.log(findMedianSortedArraysFast([1, 3], [2]))        // 2
console.log(findMedianSortedArraysFast([1, 2], [3, 4]))     // 2.5
console.log(findMedianSortedArraysFast([1, 2], [1, 3, 4]))  // 2
