// const Graph = require('./Graph')

class DepthFirstSearch {
  constructor(G, s) {
    this.marked = new Array(G.V()).fill(false)
    this.c = 0
    this.dfs(G, s)
  }

  dfs(G, v) {
    this.marked[v] = true
    this.c++
    for (const w of G.adjacent(v)) {
      if (!this.marked[w]) this.dfs(G, w)
    }
  }

  isMarked(w) {
    return this.marked[w]
  }

  count() {
    return this.c
  }
}

module.exports = DepthFirstSearch

// tests
// const g = new Graph(3)
// g.addEdge(0, 2)
// console.log(g)

// const s = new DepthFirstSearch(g, 2)
// console.log(s)
