function interpreter(code, tape) {
  let pointer = 0;
  tape = tape.split("");
  for (let i = 0; i < code.length; i++) {
    if (pointer < 0 || pointer >= tape.length) {
      break;
    } else if (code[i] === ">") {
      pointer++;
    } else if (code[i] === "<") {
      pointer--;
    } else if (code[i] === "*") {
      tape[pointer] = +tape[pointer] === 0 ? 1 : 0;
    } else if (code[i] === "[" && +tape[pointer] === 0) {
      for (let j = i + 1, changed = false, inner = 0; j < code.length; j++) {
        if (code[j] === "[" && changed === false) {
          inner++;
        } else if (code[j] === "]" && changed === false && inner > 0) {
          inner--;
        } else if (code[j] === "]" && changed === false && inner === 0) {
          i = j;
          changed = true;
        }
      }
    } else if (code[i] === "]" && +tape[pointer] !== 0) {
      for (let j = i - 1, changed = false, inner = 0; j >= 0; j--) {
        if (code[j] === "]" && changed === false) {
          inner++;
        } else if (code[j] === "[" && changed === false && inner > 0) {
          inner--;
        } else if (code[j] === "[" && changed === false && inner === 0) {
          i = j;
          changed = true;
        }
      }
    }
  }
  return tape.join("");
}

// CLEVER MUST LOOK AT LATER IN DETAIL (ooflorent, solnce2, udayyyy, user2630808):
function interpreter(code, tape) {
  const instr = [`let cp = 0`];
  for (let c of code) {
    switch (c) {
      case ">":
        instr.push(`if (++cp >= cells.length) return cells`);
        break;
      case "<":
        instr.push(`if (--cp < 0) return cells`);
        break;
      case "*":
        instr.push(`cells[cp] ^= 1`);
        break;
      case "[":
        instr.push(`while (cells[cp]) {`);
        break;
      case "]":
        instr.push(`}`);
        break;
    }
  }
  instr.push(`return cells`);
  return new Function("cells", instr.join("\n"))(
    tape.split("").map(Number)
  ).join("");
}

// AND THIS (matthewmazurek):
const interpreter = (code, tape) =>
  new Function(
    "tape",
    ["let p = 0"]
      .concat(
        [...code].filter(c => /[><*\[\]]/.test(c)).map(c => {
          return {
            ">": "if (++p >= tape.length) return tape",
            "<": "if (--p < 0) return tape",
            "*": "tape[p] ^= 1",
            "[": "while (tape[p] != 0) {",
            "]": "}"
          }[c];
        }),
        ["return tape"]
      )
      .join("\n")
  )([...tape]).join("");
