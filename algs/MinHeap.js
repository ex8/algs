// index j
// children of j is 2*j and 2*j+1
// parent of j is floor(j/2)
// for sort, use sink

class MinHeap {
  constructor() {
    this.a = []
    this.N = 0
  }

  insert(v) {
    this.a[++this.N] = v
    this.swim(this.N)
  }

  min() {
    return this.a[1]
  }

  delMin() {
    const min = this.min()
    this.exch(1, this.N--)
    this.a[this.N+1] = null
    this.sink(1)
    return min
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.N
  }

  less(i, j) {
    return this.a[i] > this.a[j]
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
    while(2*k <= this.N) {
      let c = 2*k
      if (c < this.N && this.less(c, c+1)) c++
      if (!this.less(k, c)) break
      this.exch(k, c)
      k = c
    }
  }
}

const mh = new MinHeap()
mh.insert(9)
console.log(mh)     // [nil, 9]
mh.insert(0)
console.log(mh)     // [nil, 0, 9]
mh.insert(2)
console.log(mh)     // [nil, 0, 9, 2]
mh.delMin()
console.log(mh)     // [nil, 2, 9]

module.exports = MinHeap
