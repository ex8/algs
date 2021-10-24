class Bag {
  constructor() {
    this.a = []
  }

  add(...items) {
    this.a.push(...items)
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.a.length
  }

  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => ({
        value: this.a[i++],
        done: (i - 1) === this.a.length
      }),
    }
  }
}

module.exports = Bag

// tests
// const b = new Bag()
// b.add(1, 1.5, 2, 3, 4, 10)
// for (const n of b) {
//   console.log(n)
// }
// console.log(b.isEmpty())
