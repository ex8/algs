const BinarySearch = require("./binarySearch")

class ThreeSum {
  static count(a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        for (let k = j + 1; k < a.length; k++) {
          if (a[i] + a[j] + a[k] === 0) {
            count++
          }
        }
      }
    }
    return count
  }
}

class ThreeSumFast {
  static count(a) {
    a.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (BinarySearch.rankIterative(-a[i]-a[j], a) > j) count++
      }
    }
    return count
  }
}

module.exports = ThreeSum

const input = [1, 2, -3, 4, 5, 6, 7]
// console.log(ThreeSum.count(input))
console.log(ThreeSumFast.count(input))
