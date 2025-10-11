//100Daysofcode
//Day54

function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return "Invalid";
      }
    }
  }

  return stack.length === 0 ? "Valid" : "Invalid";
}

console.log(isValidParentheses("()[]{}"));   // Valid
console.log(isValidParentheses("(]"));       // Invalid
console.log(isValidParentheses("{[()]}"));   // Valid