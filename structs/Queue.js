class Queue {
  constructor() {
    this.a = []
  }

  enqueue(...items) {
    this.a.push(...items)
  }

  dequeue() {
    return this.a.shift()
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

  toArray() {
    return this.a
  }
}

module.exports = Queue

// tests
// const q = new Queue()
// q.enqueue(2, 4, 6, 8)
// q.dequeue()
// q.enqueue(2)
// for (const n of q) {
//   console.log(n)
// }
