const Random = require('../utils/Random')

class QuickSort {
  static sort(a) {
    Random.shuffle(a)
    this.sorter(a, 0, a.length-1)
  }

  static sorter(a, lo, hi) {
    if (hi <= lo) return
    let j = this.partition(a, lo, hi)
    this.sorter(a, lo, j-1)
    this.sorter(a, j+1, hi)
  }

  static partition(a, lo, hi) {
    let i = lo
    let j = hi + 1
    let v = a[lo]
    while (true) {
      while (this.less(a[i++], v)) if (i === hi) break
      while (this.less[v, a[j--]]) if (j === lo) break
      if (i >= j) break
      this.swap(a, i, j)
    }
    this.swap(a, lo, j)
    return j
  }

  static less(a, b) {
    return a < b
  }

  static swap(a, i, j) {
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }

  static isSorted(a) {
    for (let i = 1; i < a.length; i++) {
      if (this.less(a[i], a[i-1])) return false
    }
    return true
  }
}

const a = [11, 3, 0, 4, 0, 2, 1]
QuickSort.sort(a)
console.log(`sorted?: ${QuickSort.isSorted(a)} - ${a}`)

const b = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E']
QuickSort.sort(b)
console.log(`sorted?: ${QuickSort.isSorted(b)} - ${b}`)
