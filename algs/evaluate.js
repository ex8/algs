// Expression Evaluation

const Stack = require('../structs/stack')

const OPERATORS = ['+', '-', '*', '/', '']

const evaluate = (expression) => {
  const ops = new Stack()
  const vals = new Stack()
  for (const e of expression) {
    if (e === '(') continue
    else if (OPERATORS.includes(e)) {
      ops.push(e)
    } else if (e === ')') {
      const op = ops.pop()
      let v = vals.pop()
      if (op === '+') v = vals.pop() + v
      else if (op === '-') v = vals.pop() - v
      else if (op === '*') v = vals.pop() * v
      else if (op === '/') v = vals.pop() / v
      vals.push(v)
    } else vals.push(Number(e))
  }
  return vals.pop()
}

module.exports = {
  evaluate,
}

console.log(evaluate('(1+((2+3)*(4*5)))')) // 101
