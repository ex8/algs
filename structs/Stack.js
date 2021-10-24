class Stack {
  constructor() {
    this.a = []
  }

  push(...items) {
    this.a.push(...items)
  }

  pop() {
    return this.a.pop()
  }

  peek() {
    return this.a[this.a.length - 1]
  }

  isEmpty() {
    return this.a.length === 0
  }

  size() {
    return this.a.length
  }

  toArray() {
    return this.a
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

module.exports = Stack

// tests
// const s = new Stack()
// s.push(2, 4, 6, 8)
// s.pop()
// s.push(2)
// for (const n of s) {
//   console.log(n)
// }
