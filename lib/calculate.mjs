const operators = new Set(["+", "-", "*", "/", "%", "^", "(", ")"]);

function tokenize(input) {
  if (!input || input.length > 256) throw new Error("Invalid expression");

  const tokens = [];
  for (let index = 0; index < input.length;) {
    const character = input[index];
    if (/\s/.test(character)) {
      index += 1;
      continue;
    }
    if (operators.has(character)) {
      tokens.push(character);
      index += 1;
      continue;
    }
    if (/\d|\./.test(character)) {
      const start = index;
      let decimalPoints = 0;
      while (index < input.length && /\d|\./.test(input[index])) {
        if (input[index] === ".") decimalPoints += 1;
        index += 1;
      }
      const value = input.slice(start, index);
      if (decimalPoints > 1 || value === ".") throw new Error("Invalid expression");
      tokens.push(Number(value));
      continue;
    }
    throw new Error("Invalid expression");
  }
  return tokens;
}

export function calculate(input) {
  const tokens = tokenize(input);
  let index = 0;

  const primary = () => {
    const token = tokens[index++];
    if (typeof token === "number") return token;
    if (token !== "(") throw new Error("Invalid expression");
    const value = expression();
    if (tokens[index++] !== ")") throw new Error("Invalid expression");
    return value;
  };

  const power = () => {
    const left = primary();
    if (tokens[index] !== "^") return left;
    index += 1;
    return left ** unary();
  };

  const unary = () => {
    if (tokens[index] === "+") {
      index += 1;
      return unary();
    }
    if (tokens[index] === "-") {
      index += 1;
      return -unary();
    }
    return power();
  };

  const term = () => {
    let value = unary();
    while (["*", "/", "%"].includes(tokens[index])) {
      const operator = tokens[index++];
      const right = unary();
      if (operator === "*") value *= right;
      if (operator === "/") value /= right;
      if (operator === "%") value %= right;
    }
    return value;
  };

  const expression = () => {
    let value = term();
    while (["+", "-"].includes(tokens[index])) {
      value = tokens[index++] === "+" ? value + term() : value - term();
    }
    return value;
  };

  const result = expression();
  if (index !== tokens.length || !Number.isFinite(result)) {
    throw new Error("Invalid expression");
  }
  return result;
}
