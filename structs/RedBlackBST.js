const Queue = require('./Queue')

const colors = {
  RED: true,
  BLACK: false,
}

class Node {
  constructor(k, v, N, left, right, color) {
    this.k = k
    this.v = v
    this.N = N          // num of nodes in subtree (including itself)
    this.left = left
    this.right = right
    this.color = color  // color of link from parent
  }
}

// RedBlackBST impls perfectly balanced BST
// O(lg(n)) insert & search
// 1. Red links lean left
// 2. No node n has two red links connected to it
// 3. The tree has `perfect black balance` such that every path from the root
//    to a null link has the same number of black links
//    also known as tree's black height
export class RedBlackBST {
  constructor() {
    this.root = null
  }

  size() {
    return this.sizeImpl(this.root)
  }

  sizeImpl(n) {
    if (!n) return 0
    else return n.N
  }

  get(k) {
    return this.getImpl(this.root, k)
  }

  getImpl(n, k) {
    if (!n) return
    const cmp = this.less(k, n.k)
    if (cmp < 0) return this.getImpl(n.left, k)
    else if (cmp > 0) return this.getImpl(n.right, k)
    else return n.v
  }

  put(k, v) {
    this.root = this.putImpl(this.root, k, v)
    this.root.color = colors.BLACK
  }

  // update n's value to v if k in subtree
  // otherwise add a new node
  // rotate tree to ensure perfect balance
  // re-calculate N
  putImpl(n, k, v) {
    if (!n) return new Node(k, v, 1, colors.RED)
    const cmp = this.less(k, n.k)
    if (cmp < 0) n.left = this.putImpl(n.left, k, v)
    else if (cmp > 0) n.right = this.putImpl(n.right, k, v)
    else n.v = v
    if (this.isRed(n.right) && !this.isRed(n.left)) n = this.rotateLeft(n)
    if (this.isRed(n.left) && this.isRed(n.left.left)) n = this.rotateRight(n)
    if (this.isRed(n.left) && this.isRed(n.right)) this.flipcolors(n)
    n.N = this.sizeImpl(n.left) + this.sizeImpl(n.right) + 1
    return n
  }

  min() {
    return this.minImpl(this.root)
  }

  minImpl(n) {
    if (!n.left) return n
    return this.minImpl(n.left)
  }

  max() {
    return this.maxImpl(this.root)
  }

  maxImpl() {
    if (!n.right) return n
    return this.maxImpl(n.right)
  }

  floor(k) {
    return this.floorImpl(this.root, k)
  }

  floorImpl(n, k) {
    if (!n) return
    const cmp = this.less(k, n.k)
    if (cmp === 0) return n
    if (cmp < 0) return this.floorImpl(n.left, k)
    const t = this.floorImpl(n.right, k)
    if (!t) return t
    else return n
  }

  // find the node with given rank k
  select(k) {
    return this.selectImpl(this.root, k)
  }

  selectImpl(n, k) {
    if (!n) return
    const t = this.sizeImpl(n.left)
    if (t > k) return this.selectImpl(n.left, k)
    else if (t < k) return this.selectImpl(n.right, k - t - 1)
    else return n
  }

  // return num of keys less than k
  rank(k) {
    return this.rankImpl(this.root, k)
  }

  rankImpl(n, k) {
    if (!n) return 0
    const cmp = this.less(k, n.k)
    if (cmp < 0) return this.rankImpl(n.left, k)
    else if (cmp > 0) return 1 + this.sizeImpl(n.left) + this.rankImpl(k, n.right)
    else return this.sizeImpl(n.left)
  }


  deleteMin() {
    throw new Error('not yet impl')
  }

  deleteMinImpl(n) {
    throw new Error('not yet impl')
  }

  delete(k) {
    throw new Error('not yet impl')
  }

  deleteImpl(n, k) {
    throw new Error('not yet impl')
  }

  keys(lo = this.min().k, hi = this.max().k) {
    const q = new Queue()
    this.keysImpl(this.root, q, lo, hi)
    return q.toArray()
  }

  keysImpl(n, q, lo, hi) {
    if (!n) return
    const cmpLo = this.less(lo, n.k)
    const cmpHi = this.less(hi, n.k)
    if (cmpLo < 0) this.keysImpl(n.left, q, lo, hi)
    if (cmpLo <= 0 && cmpHi >= 0) q.enqueue(n.k)
    if (cmpHi > 0) this.keysImpl(n.right, q, lo, hi)
  }

  inOrder() {
    return this.inOrderImpl(this.root)
  }

  inOrderImpl(n) {
    if (!n) return
    this.inOrderImpl(n.left)
    console.log(n.k)
    this.inOrderImpl(n.right)
  }

  exists(k) {
    return !!this.get(k)
  }

  height() {
    return this.heightImpl(this.root)
  }

  heightImpl(n) {
    if (!n) return 0
    return 1 + Math.max(this.heightImpl(n.left), this.heightImpl(n.right))
  }

  isRed(n) {
    if (!n) return false
    return n.color === colors.RED
  }

  rotateLeft(n) {
    const t = n.right
    n.right = t.left
    t.left = n
    t.color = n.color
    n.color = colors.RED
    t.N = n.N
    n.N = this.sizeImpl(n.left) + this.sizeImpl(n.right) + 1
    return t
  }

  rotateRight(n) {
    const t = n.left
    n.left = t.right
    t.left = n
    t.color = n.color
    n.color = colors.RED
    t.N = n.N
    n.N = this.sizeImpl(n.left) + this.sizeImpl(n.right) + 1
    return t
  }

  flipcolors(n) {
    n.color = colors.RED
    n.left.color = colors.BLACK
    n.right.color = colors.BLACK
  }

  less(a, b) {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
  }
}

module.exports = RedBlackBST
