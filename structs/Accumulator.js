class Accumulator {
  constructor() {
    this.total = 0
    this.N = 0
  }

  addDataValue(v) {
    this.N++
    this.total += v
  }

  mean() {
    return this.total / this.N
  }

  toString() {
    return `Mean ${this.N} values: ${this.mean()}`
  }
}

module.exports = Accumulator

// tests
const a = new Accumulator()
a.addDataValue(10)
a.addDataValue(1231)
a.addDataValue(11)
console.log(a.toString())
