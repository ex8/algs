// index j
// children of j is 2*j and 2*j+1
// parent of j is floor(j/2)
// for sort, use sink

class MaxHeap {
  constructor() {
    this.a = []
    this.N = 0
  }

  insert(v) {
    this.a[++this.N] = v
    this.swim(this.N)
  }

  max() {
    return this.a[1]
  }

  delMax() {
    const max = this.max()
    this.exch(1, this.N--)
    this.a[this.N+1] = null
    this.sink(1)
    return max
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.N
  }

  less(i, j) {
    return this.a[i] < this.a[j]
  }

  exch(i, j) {
    const { a } = this
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }

  swim(k) {
    const p = Math.floor(k/2)
    while (k > 1 && this.less(p, k)) {
      this.exch(p, k)
      k = p
    }
  }

  sink(k) {
    while (2*k <= this.N) {
      let c = 2*k
      if (c < this.N && this.less(c, c+1)) c++
      if (!this.less(k, c)) break
      this.exch(k, c)
      k = c
    }
  }
}

const mh = new MaxHeap()
mh.insert(9)      // [nil, 9]
console.log(mh)
mh.insert(0)      // [nil, 9, 0]
console.log(mh)
mh.insert(11)     // [nil, 11, 0, 9]
console.log(mh)
mh.insert(8)      // [nil, 11, 8, 9, 0]
console.log(mh)
mh.delMax()
console.log(mh)   // [nil, 9, 8, 0]

module.exports = MaxHeap
