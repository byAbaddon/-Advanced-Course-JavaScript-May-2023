function jansNotation(data) {
  const mapper = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }

  const stack = [];
  for (const el of data) {
    if (typeof el === 'number') {
      stack.push(el)
    } else {
      const action = mapper[el]
      if (stack.length >= 2) {
        const b = stack.pop()
        const a = stack.pop()
        stack.push(action(a, b))
      } else {
        return 'Error: not enough operands!'
      }
    }
  }

  return stack.length ^ 1 ? 'Error: too many operands!' : stack[0]
}

// console.log(jansNotation([3, 4, '+']))