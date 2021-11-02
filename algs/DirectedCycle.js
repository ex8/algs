const { Stack } = require('../structs/Stack')

// is diagraph G a DAG?
class DirectedCycle {
  constructor(G) {
    this.marked = new Array(G.V()).fill(false)
    this.edgeTo = new Array(G.V())
    this.s = new Array(G.V()).fill(false)
    for (let v = 0; v < G.V(); v++) {
      if (!this.marked[v]) this.dfs(G, v)
    }
  }

  dfs(G, v) {
    this.s[v] = true
    this.marked[v] = true
    for (const w of G.adjacent(v)) {
      if (this.hasCycle()) return
      else if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(G, w)
      } else if (this.s[w]) {
        this.cycle = new Stack()
        for (let x = v; x != w; x = this.edgeTo[x]) this.cycle.push(x)
        this.cycle.push(w, v)
      }
    }
    this.s[v] = false
  }

  hasCycle() {
    return !!this.cycle
  }

  getCycle() {
    return this.cycle
  }
}

module.exports = DirectedCycle
