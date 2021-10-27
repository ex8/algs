// is graph G acyclic?
class Cycle {
  constructor(G) {
    this.marked = new Array(G.V()).fill(false)
    this.acyclic = false
    for (let s = 0; s < G.V(); s++) {
      if (!this.marked[s]) this.dfs(G, s)
    }
  }

  dfs(G, v, u) {
    this.marked[v]
    for (const w of G.adjacent(v)) {
      if (!this.marked[w]) this.dfs(G, w, v)
      else if (w != u) this.acyclic = true
    }
  }

  hasCycle() {
    return this.acyclic
  }
}

module.exports = Cycle
