const { readFileSync } = require('fs')

class File {
  static read(filename) {
    try {
      const data = readFileSync(filename, 'utf-8')
      return data.split(/\r?\n/)
    } catch (err) {
      throw err
    }
  }
}

module.exports = File
