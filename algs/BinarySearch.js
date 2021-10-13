// key: 2
// [1, 2, 3, 4, 5, 6, 7] l = 0, h = 6, mid = 3 MATH: 0 + (6 - 0) / 2
// [1, 2, 3, 4, 5, 6, 7] l = 0, h = 2, mid = 1 MATH: 0 + (2 - 0) / 2
// return 1

// key: 5
// [1, 2, 3, 4, 5, 6, 7] l = 0, h = 6, mid = 3 MATH: 0 + (6 - 0) / 2
// [1, 2, 3, 4, 5, 6, 7] l = 4, h = 6, mid = 5 MATH: 4 + (6 - 4) / 2
// [1, 2, 3, 4, 5, 6, 7] l = 4 h = 4, mid = 4 MATH: 4 + (4 - 0) / 2
// return 4

// key: 3
// [1, 2, 3, 4, 5, 6] l = 0, h = 5, mid = 3.5 ~~ 3 MATH: 0 + (5 - 0) / 2
// [1, 2, 3, 4, 5, 6] l = 0, h = 2, mid = 1 MATH: 0 + (2 - 0) / 2
// [1, 2, 3, 4, 5, 6] l = 2, h = 2, mid = 2 MATH: 2 + (2 - 2) / 2 
// return 2

class BinarySearch {
  static rankIterative(key, a) {
    let lo = 0
    let hi = a.length - 1
    while (lo <= hi) {
      const mid = Math.floor(lo + (hi - lo) / 2)
      if (key < a[mid]) hi = mid - 1
      else if (key > a[mid]) lo = mid + 1
      else return mid
    }
  }

  static rankRecursive(key, a) {
    return this.ranker(key, a, 0, a.length - 1)
  }

  static ranker(key, a, lo, hi) {
    if (lo > hi) return
    const mid = Math.floor(lo + (hi - lo) / 2)
    if (key < a[mid]) return this.ranker(key, a, lo, mid - 1)
    else if (key > a[mid]) return this.ranker(key, a, mid + 1, hi)
    else return mid
  }
}

// iterative
// console.log(BinarySearch.rankIterative(2, [1, 2, 3, 4, 5, 6, 7])) // 1
// console.log(BinarySearch.rankIterative(5, [1, 2, 3, 4, 5, 6, 7])) // 4
// console.log(BinarySearch.rankIterative(3, [1, 2, 3, 4, 5, 6])) // 2


// recursive
// console.log(BinarySearch.rankRecursive(2, [1, 2, 3, 4, 5, 6, 7])) // 1
// console.log(BinarySearch.rankRecursive(5, [1, 2, 3, 4, 5, 6, 7])) // 4
// console.log(BinarySearch.rankRecursive(3, [1, 2, 3, 4, 5, 6])) // 2

module.exports = BinarySearch
