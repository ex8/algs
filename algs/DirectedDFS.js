class DirectedDFS {
  constructor(G, s) {
    this.marked = new Array(G.V()).fill(false)
    if (Array.isArray(s)) {
      for (const w of s) {
        if (!this.marked[w]) this.dfs(G, w)
      }
    } else this.dfs(G, s)
  }

  dfs(G, v) {
    this.marked[v] = true
    for (const w of G.adjacent(v)) {
      if (!this.marked[w]) this.dfs(G, w)
    }
  }

  isMarked(w) {
    return this.marked[w]
  }
}

module.exports = DirectedDFS
