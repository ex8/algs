const { join } = require('path')
const { SymbolGraph } = require('../structs')
const BreadthFirstPaths = require('./BreadthFirstPaths')

class DegreesOfSeparation {
  static degree(filename, delim, source, target) {
    const path = []
    const sg = new SymbolGraph(filename, delim)
    if (!sg.contains(source)) return
    const s = sg.index(source)
    const bfs = new BreadthFirstPaths(sg.graph(), s)
    if (sg.contains(target)) {
      const t = sg.index(target)
      if (bfs.hasPathTo(t)) {
        for (const v of bfs.pathTo(t)) path.push(sg.name(v))
      }
    }
    return path
  }
}

module.exports = DegreesOfSeparation

// tests
// const filename = join(__dirname, '..', 'data', 'routes.txt')
// console.log(DegreesOfSeparation.degree(filename, " ", "JFK", "LAS")) // [JFK, ORD, PHX, LAS]
