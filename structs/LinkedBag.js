class Node {
  constructor(s = null, n = null) {
    this.item = s
    this.next = n
  }
}

class LinkedBag {
  constructor(first = null, n = 0) {
    this.first = first
    this.n = 0
  }

  add(s) {
    const old = this.first
    this.first = new Node(s, old)
  }

  isEmpty() {
    return this.n === 0
  }

  size() {
    return this.n
  }
}
