const BinarySearch =  require('./binarySearch')

class TwoSum {
  static count(a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] + a[j] === 0) count++
      }
    }
    return count
  }
}

class TwoSumFast {
  static count(a) {
    a.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (BinarySearch.rankIterative(-a[i], a) > i) count++
    }
    return count
  }
}

const input = [1, -1, 2, -2]
console.log(TwoSumFast.count(input))

module.exports = { TwoSum, TwoSumFast }
