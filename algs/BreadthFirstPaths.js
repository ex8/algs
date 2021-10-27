const { Queue, Stack, Graph } = require('../structs')

class BreadthFirstPaths {
  constructor(G, s) {
    this.marked = new Array(G.V()).fill(false)  // can we find the shortest path?
    this.edgeTo = new Array(G.V())             // index = vertex, value = last vertex on known path
    this.s = s
    this.bfs(G, s)
  }

  bfs(G, s) {
    const q = new Queue()

    // mark the source & enqueue
    this.marked[s] = true
    q.enqueue(s)
    while (!q.isEmpty()) {
      // remove the next vertex from the q
      const v = q.dequeue()
      for (const w of G.adjacent(v)) {
        // for every unmarked adjacent vertex w;
        // save last edge, mark it, & add vertex w to q
        if (!this.marked[w]) {
          this.edgeTo[w] = v
          this.marked[w] = true
          q.enqueue(w)
        }
      }
    }
  }

  hasPathTo(v) {
    return this.marked[v]
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) return
    const path = new Stack()
    for (let i = v; i != this.s; i = this.edgeTo[i]) path.push(i)
    path.push(this.s)
    return path.toArray()
  }
}

module.exports = BreadthFirstPaths

// tests
// const g = new Graph(3)
// g.addEdge(0, 1)
// g.addEdge(1, 2)

// const bfs = new BreadthFirstPaths(g, 0)
// console.log(bfs.pathTo(2)) // [2, 1, 0]
// console.log(bfs.pathTo(1)) // [1, 0]