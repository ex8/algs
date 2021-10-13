class StopWatch {
  constructor() {
    this.start = Date.now()
  }

  elapsedTime() {
    const now = Date.now()
    return (now - this.start) / 1000
  }
}

module.exports = StopWatch

// Tests \\
// const sw = new StopWatch()
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(sw.elapsedTime())
