class Graph {
  constructor(V) {
    this.verices = V
    this.edges = 0
    this.adj = new Array(V)
    for (let v = 0; v < V; v++) this.adj[v] = []
  }

  V() {
    return this.verices
  }
  
  E() {
    return this.edges
  }

  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
  }

  adjacent(v) {
    return this.adj[v]
  }

  degree(v) {
    return this.adjacent(v).length
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

module.exports = Graph

// tests
// const g = new Graph(3)
// g.addEdge(0, 1)
// g.addEdge(0, 2)
// g.addEdge(1, 2)
// console.log(g.toString())
