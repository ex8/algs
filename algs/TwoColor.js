class TwoColor {
  constructor(G) {
    this.marked = new Array(G.V()).fill(false)
    this.color = new Array(G.V()).fill(false)
    this.isTwoColorable = true
    for (let s = 0; s < G.V(); s++) {
      if (!this.marked[s]) this.dfs(G, s)
    }
  }

  dfs(G, v) {
    this.marked[v] = true
    for (const w of G.adjacent(v)) {
      if (!this.marked[w]) {
        this.color[w] = !this.color[v]
        this.dfs(G, w)
      }
      else if (this.color[w] === this.color[v]) this.isTwoColorable = false
    }
  }

  isBipartite() {
    return this.isTwoColorable
  }
}

module.exports = TwoColor
