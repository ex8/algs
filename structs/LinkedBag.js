class Node {
  constructor(s = null, n = null) {
    this.item = s
    this.next = n
  }
}

class LinkedBag {
  constructor(first = null, N = 0) {
    this.first = first
    this.N = N
  }

  add(s) {
    const old = this.first
    this.first = new Node(s, old)
    this.N++
  }

  find(s) {
    let current = this.first
    while (current) {
      if (current.item === s) return current
      current = this.first.next
    }
  }

  remove(s) {
    let current = this.first
    let prev = null
    while (current) {
      if (current.item === s) {
        if (!prev) this.first = current
        if (prev) prev.next = null
        this.N--
        return
      }
      prev = current
      current = current.next
    }
  }

  isEmpty() {
    return this.N === 0
  }

  size() {
    return this.N
  }
}

module.exports = LinkedBag
