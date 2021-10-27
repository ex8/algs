class CC {
  constructor(G) {
    this.marked = new Array(G.V()).fill(false)
    this.id = new Array(G.V())
    this.count = 0
    for (let s = 0; s < G.V(); s++) {
      if (!this.marked[s]) {
        this.dfs(G, s)
        this.count++
      }
    }
  }

  dfs(G, v) {
    this.marked[v] = true
    this.id[v] = this.count
    for (const w of G.adjacent(v)) {
      if (!marked[w]) this.dfs(G, w)
    }
  }

  // is v and w connected?
  connected(v, w) {
    return id[v] === id[w]
  }

  // num of connected components
  count() {
    return this.count
  }

  // component identifer for v; between(0, count()-1)
  id(v) {
    return this.id[v]
  }
}

module.exports = CC
