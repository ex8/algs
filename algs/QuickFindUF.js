// Quick Find Union Find Algorithm
//
// m = [0, 1, 2, 3, 4] -> index = site; value = component identifier
// union(1, 3) - m = [0, 3, 2, 3, 4]
// union(1, 4) - m = [0, 4, 2, 4, 4]
// union(0, 4) - m = [0, 4, 0, 4, 4]
// union(2, 4) - m = [4, 4, 4, 4, 4]

class QuickFindUF {
  constructor(N) {
    this.n = N
    this.m = []
    for (let i = 0; i < N; i++) {
      this.m[i] = i
    }
  }

  // add connection between sites p & q
  union(p, q) {
    const pc = this.find(p)
    const qc = this.find(q)
    if (pc === qc) return
    for (let i = 0; i < this.m.length; i++) {
      if (this.m[i] === pc) this.m[i] = qc
    }
    this.n--
  }
  
  // find component containing site p
  find(p) {
   return this.m[p]
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

const pairs = [[1, 3], [1,4], [0, 4], [2, 0]]
const uf = new QuickFindUF(5)
console.log(uf)
for (const [p, q] of pairs) {
  if (!uf.connected(p, q)) {
    uf.union(p, q)
    console.log(`${p} and ${q}`)
  }
}
console.log(uf)

module.exports = QuickFindUF
