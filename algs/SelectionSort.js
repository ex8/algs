class SelectionSort {
  static sort(a) {
    for (let i = 0; i < a.length; i++) {
      let min = i
      for (let j = i+1; j < a.length; j++) {
        if (this.less(a[j], a[min])) min = j
      }
      this.swap(a, i, min)
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
SelectionSort.sort(a)
console.log(`sorted?: ${SelectionSort.isSorted(a)} - ${a}`)

const b = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E']
SelectionSort.sort(b)
console.log(`sorted?: ${SelectionSort.isSorted(b)} - ${b}`)
