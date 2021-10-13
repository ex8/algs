class HeapSort {
  static sort(a) {
    let N = a.length
    
    // construct the heap from a
    for (let k = N/2; k >= 1; k--) this.sink(a, k, N)

    // exchange largest element (a[1]) with last (a[N])
    // then restore order
    while (N > 1) {
      this.exch(a, 1, N--)
      this.sink(a, 1, N)
    }
  }

  static sink(a, k, N) {
    while(2*k <= N) {
      let c = 2*k
      if (c < N && this.less(a, c, c+1)) c++
      if (!this.less(a, k, c)) break
      this.exch(a, k, c)
      k = c
    }
  }

  static exch(a, i, j) {
    const t = a[i-1]
    a[i-1] = a[j-1]
    a[j-1] = t
  }

  // max heap order
  static less(a, i, j) {
    return a[i-1] < a[j-1]
  }
}

const a = [9, 0, 3]
const b = ['c', 'b', 'a']
HeapSort.sort(a)
HeapSort.sort(b)
console.log(a)
console.log(b)

module.exports = HeapSort
