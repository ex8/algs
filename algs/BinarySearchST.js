class BinarySearchST {
  constructor() {
    this.keys = []
    this.vals = []
    this.N = 0
  }

  size() {
    return this.N
  }

  isEmpty() {
    return this.size() === 0
  }

  get(k) {
    if (this.isEmpty()) return
    const i = this.rank(k)
    if (i < this.N && this.less(this.keys[i], k)) return this.vals[i]
  }

  rank(k) {
    if (k == null) return
    let lo = 0, hi = this.N-1
    while (lo <= hi) {
      const mid = lo  + Math.floor((hi - lo) / 2)
      if (k === this.keys[mid]) return mid
      const cmp = this.less(k, this.keys[mid])
      if (cmp) hi = mid-1
      else lo = mid+1
    }
    return lo
  }

  put(k, v) {
    const i = this.rank(k)
    if (i < this.N && this.less(this.keys[i], k)) this.vals[i] = v
    for (let j = this.N; j > i; j--) {
      this.keys[j] = this.keys[j-1]
      this.vals[j] = this.vals[j-1]
    }
    this.keys[i] = k
    this.vals[i] = v
    this.N++
  }

  delete(k) {
    if (k == null) return
    if (this.isEmpty()) return
    const i = this.rank(k)
    if (i == this.N || this.less(this.keys[i], k)) return
    for (let j = i; i < this.N-1; j++) {
      this.keys[j] = this.keys[j+1]
      this.vals[j] = this.vals[j+1]
    }
    this.N--
    this.keys[this.N] = null
    this.vals[this.N] = null
  }

  contains(k) {
    return this.get(k) != null
  }

  less(a, b) {
    return a < b
  }
}

module.exports = BinarySearchST
