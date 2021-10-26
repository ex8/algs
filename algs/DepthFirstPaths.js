const { Stack } = require('../structs')

class DepthFirstPaths {
  constructor(G, s) {
    this.marked = new Array(G.V()).fill(false)  // has dfs() been called for v?
    this.edgeTo = new Array(G.V())              // index = vertex, value = last vertex on known path
    this.s = s
    this.dfs(G, s)
  }

  dfs(G, v) {
    this.marked[v] = true
    for (const w of G.adjacent(v)) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(G, w)
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

module.exports = DepthFirstPaths
