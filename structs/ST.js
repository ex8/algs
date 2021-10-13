// Ordered Symbol Table (Map)

class ST {
  constructor() {
    this.m = {}
  }

  symbolize() {
    this.m = this.keys().sort(this.less).reduce((p, c) => {
      p[c] = this.m[c]
      return p
    }, {})
  }
  
  put(k, v) {
    if (k == null) return
    else if (v == null) return this.remove(k)
    else this.m[k] = v
    this.symbolize()
  }

  get(k) {
    if (k == null) return
    return this.m[k]
  }

  remove(k) {
    if (key == null) return
    delete this.m[k]
  }

  contains(k) {
    return !!this.m[k]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.keys().length
  }

  min() {
    return this.m[this.keys()[0]]
  }

  max() {
    return this.m[this.keys()[this.size()-1]]
  }

  floor(k) {}
  
  ceiling(k) {}

  // find the number of keys less than k
  // index == rank(select(i))
  rank(k) {
    let i = 0
    for (const key of this.keys()) {
      if (key < k) c++
    }
    return i
  }

  // find the key with a given rank
  select(i) {
    for (let j = 0; j < this.size(); j++) {
      if (j === i) return this.get()
    }
  }

  removeMin() {
    return this.remove(this.min())
  }

  removeMax() {
    return this.remove(this.max())
  }

  keys() {
    return Object.keys(this.m)
  }

  less(a, b) {
    return a < b
  }
}

module.exports = ST

const st = new ST()
st.put(6, 'six')
st.put(4, 'four')
st.put(2, 'two')
st.put(5, 'five')
console.log(st)
