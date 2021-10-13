class Node {
  constructor(s = null, n = null) {
    this.item = s
    this.next = n
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

module.exports = LinkedList

const n1 = new Node("to")
const n2 = new Node("be")
const n3 = new Node("or")

n1.next = n2
n2.next = n3
