class Counter {
  constructor(id) {
    this.id = id
    this.c = 0
  }

  increment() {
    this.c++
  }

  tally() {
    return this.c
  }

  toString() {
    return `${this.id} - (${this.c})`
  }
}

module.exports = Counter
