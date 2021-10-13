class MergeSort {
  static sort(a) {
    this.sorter(a, 0, a.length-1)
  }

  static sorter(a, lo, hi) {
    if (hi <= lo) return
    let mid = Math.floor(lo + (hi - lo)/2)
    this.sorter(a, lo, mid)
    this.sorter(a, mid+1, hi)
    this.merge(a, lo, mid, hi)
  }

  static merge(a, lo, mid, hi) {
    const aux = []
    let i = lo
    let j = mid+1
    for (let k = lo; k <= hi; k++) aux[k] = a[k]
    for (let k = lo; k <= hi; k++) {
      if (i > mid) a[k] = aux[j++]
      else if (j > hi) a[k] = aux[i++]
      else if (this.less(aux[j], aux[i])) a[k] = aux[j++]
      else a[k] = aux[i++]
    }
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
MergeSort.sort(a)
console.log(`sorted?: ${MergeSort.isSorted(a)} - ${a}`)

const b = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E']
MergeSort.sort(b)
console.log(`sorted?: ${MergeSort.isSorted(b)} - ${b}`)

module.exports = MergeSort
