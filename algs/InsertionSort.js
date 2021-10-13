class InsertionSort {
  static sort(a) {
    for (let i = 1; i < a.length; i++) {
      for(let j = i; j > 0 && this.less(a[j], a[j-1]); j--) {
        this.exch(a, j, j-1)
      }
    }
  }

  static less(a, b) {
    return a < b
  }

  static exch(a, i, j) {
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
InsertionSort.sort(a)
console.log(`sorted?: ${InsertionSort.isSorted(a)} - ${a}`)

const b = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E']
InsertionSort.sort(b)
console.log(`sorted?: ${InsertionSort.isSorted(b)} - ${b}`)
