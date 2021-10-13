class Node {
  constructor(s = null, n = null) {
    this.item = s
    this.next = n
  }
}

class LinkedQueue {
  constructor(first = null, last = null, n = 0) {
    this.first = first
    this.last = last
    this.n = n
  }

  isEmpty() {
    return this.n === 0
  }

  size() {
    return this.n
  }

  enqueue(s) {
    const old = this.last
    this.last = new Node(s)
    if (this.isEmpty()) this.first = this.last
    else old.next = this.last
    this.n++
  }

  dequeue() {
    const old = this.first
    this.first = old.next
    this.n--
    if (this.isEmpty()) this.last = null
    return old
  }
}
