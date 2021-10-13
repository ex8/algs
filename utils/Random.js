class Random {
  static random() {
    return Math.random()
  }
  
  static uniform(n) {
    return this.random() * n
  }

  static uniformBetween(a, b) {
    return a + this.uniform(b - a)
  }

  static bernoulli(p) {
    return this.random() < p
  }

  static gaussian(m, s) {
    let r, x, y
    do {
      x = this.uniformBetween(-1.0, 1.0)
      y = this.uniformBetween(-1.0, 1.0)
      r = Math.pow(x, 2) + Math.pow(y, 2)
    } while (r >= 1 || r == 0)
    return m + s * (x * Math.sqrt(-2 * Math.log(r) / r))
  }

  static discrete(a) {
    if (!a || a.length == 0) return
    let sum = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] < 0) {
        return
      }
      sum += a[i]
    }
    
    if (sum > 1 + Number.EPSILON || sum < 1 - Number.EPSILON) return
    
    while (true) {
      const r = this.random()
      sum = 0
      for (let i = 0; i = a.length; i++) {
        sum += a[i]
        if (sum > r) return i
      }
    }
  }

  static shuffle(a) {
    return a.sort(() => Math.random() - 0.5);
  }
}

module.exports = Random

// console.log('random', Random.random())
// console.log('uniform', Random.uniform(10))
// console.log('uniform between', Random.uniformBetween(5, 9))
// console.log('bernoulli', Random.bernoulli(0.5))
// console.log('gaussian', Random.gaussian(1, 2))
