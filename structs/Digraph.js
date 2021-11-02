class Digraph {
  constructor(V) {
    this.vertices = V
    this.edges = 0
    this.adj = new Array(V)
    for (let v = 0; v < V; v++) this.adj[v] = []
  }

  V() {
    return this.vertices
  }

  E() {
    return this.edges
  }

  addEdge(v, w) {
    this.adj[v].push(w)
    this.edges++
  }

  adjacent(v) {
    return this.adj[v]
  }

  reverse() {
    const r = new Digraph(this.vertices)
    for (let v = 0; v < this.vertices; v++) {
      for (const w of this.adj(v)) r.addEdge(w, v)
    }
    return r
  }

  toString() {
    let s = `${this.vertices} vertices, ${this.edges} edges\n`
    for (let v = 0; v < this.V; v++) {
      s += `${v}: `
      for (const w of this.adjacent(v)) s += `${w} `
      s += '\n'
    }
    return s
  }
}

module.exports = Digraph
