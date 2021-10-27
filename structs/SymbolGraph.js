const { join } = require('path')
const { ST, Graph } = require('../structs')
const { File } = require('../utils')

class SymbolGraph {
  constructor(filename, delim) {
    const lines = File.read(filename)

    this.st = new ST()
    for (const line of lines) {
      const a = line.split(delim)
      for (let i = 0; i < a.length; i++) {
        if (!this.st.contains(a[i])) this.st.put(a[i], this.st.size())
      }
    }

    this.keys = new Array(this.st.size())
    for (const name of this.st.keys()) this.keys[this.st.get(name)] = name

    this.G = new Graph(this.st.size())
    for (const line of lines) {
      const a = line.split(delim)
      const v = this.st.get(a[0])
      for (let i = 1; i < a.length; i++) this.G.addEdge(v, this.st.get(a[i]))
    }
  }

  // is k a vertex?
  contains(k) {
    return this.st.contains(s)
  }

  // index associated with k
  index(k) {
    return this.st.get(k)
  }

  // key associated with v
  name(v) {
    return this.keys[v]
  }

  graph() {
    return this.G
  }
}

module.exports = SymbolGraph

// tests
// const filename = join(__dirname, '..', 'data', 'routes.txt')
// const sg = new SymbolGraph(filename, " ")
// const g = sg.graph()
// console.log(g)
