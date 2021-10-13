// Weighted Quick Union Find Algorithm
//
// m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> index = site; value = component identifier
// union(4, 3) - m = [0, 1, 2, 3, 3, 5, 6, 7, 8, 9] n = 9
// union(3, 8) - m = [0, 1, 2, 8, 3, 5, 6, 7, 8, 9] n = 8
// union(6, 5) - m = [0, 1, 2, 8, 3, 5, 5, 7, 8, 9] n = 7
// union(9, 4) - m = [0, 1, 2, 8, 3, 5, 5, 7, 8, 9] n = 6

class WeightedQuickUnionUF {
  constructor(N) {
    this.n = N
    this.m = []
    this.s = []
    for (let i = 0; i < N; i++) this.m[i] = i
    for (let i = 0; i < N; i++) this.s[i] = i
  }

  // add connection between sites p & q
  union(p, q) {
    const i = this.find(p)
    const j = this.find(q)
    if (i === j) return
    if (this.s[i] < this.s[j]) {
      this.m[i] = j
      this.s[j] += this.s[i]
    } else {
      this.m[j] = i
      this.s[i] += this.s[j]
    }
    this.n--
  }

  // find component containing site p
  find(p) {
    while (p != this.m[p]) p = this.m[p]
    return p
  }

  // return true if sites p & q are connected in the same component
  connected(p, q) {
    return this.find(p) === this.find(q)
  }

  // count the number of components
  count() {
    return this.n
  }
}

const pairs = [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  // [2, 1],
  // [5, 0],
  // [7, 2],
  // [6, 1],
]
const uf = new WeightedQuickUnionUF(10)
console.log(uf)
for (const [p, q] of pairs) {
  if (!uf.connected(p, q)) {
    uf.union(p, q)
    console.log(`${p} and ${q} - components: ${uf.count()}`)
  }
}
console.log(uf)

module.exports = WeightedQuickUnionUF
