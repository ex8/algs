const LinkedBag = require('../structs/LinkedBag')

const P = 997 // prime

class SeparateChainingHash {
  constructor(M) {
    this.M = M ?? P
    this.buckets = [...new Array(this.M)].map(_ => new LinkedBag())
  }

  hash(k) {
    return k % this.M
  }

  get(k) {
    return this.buckets[this.hash(k)].find(k)
  }

  put(k, v) {
    this.buckets[this.hash[k]].add(v)
  }

  remove(k) {
    this.buckets[this.hash[k]].remove(k)
  }
}

module.exports = SeparateChainingHash
