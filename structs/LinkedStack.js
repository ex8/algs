class Node {
  constructor(s = null, n = null) {
    this.item = s
    this.next = n
  }
}

class LinkedStack {
  constructor() {
    this.last = null
    this.n = 0
  }

  isEmpty() {
    return this.last === null
  }

  size() {
    return this.n
  }

  push(s) {
    const old = this.last
    this.last = new Node(s, old)
    this.n++
  }

  pop() {
    const popped = this.last
    this.last = popped.next
    this.n--
    return popped
  }
}

module.exports = LinkedStack

const ls = new LinkedStack()
ls.push("one")
ls.push("two")
console.log(ls)
console.log(ls.pop())
console.log(ls)
