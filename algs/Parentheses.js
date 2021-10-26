const { Stack } = require('../structs')

const RIGHT_HAND_OPERATORS = [')', ']', '}']

class Parentheses {
  static isBalanced(s) {
    const stack = new Stack()
    for (const c of s) {
      if (!RIGHT_HAND_OPERATORS.includes(c)) {
        stack.push(c)
      } else {
        stack.pop()
      }
    }
    return stack.isEmpty()
  }
}

console.log(Parentheses.isBalanced('[]')) // true
console.log(Parentheses.isBalanced('[()]{}{[()()]()}')) // true
console.log(Parentheses.isBalanced('[[')) // false
