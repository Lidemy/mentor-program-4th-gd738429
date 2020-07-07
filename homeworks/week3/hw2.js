const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function isFlowerNum(n) {
  const tempStr = `${n}`;
  let result = 0;
  for (let i = 0; i < tempStr.length; i += 1) {
    result += Number(tempStr[i]) ** Number(tempStr.length);
  }
  if (result === n) console.log(result);
}

function solve(line) {
  const tmp = line[0].split(' ');
  const a = Number(tmp[0]);
  const b = Number(tmp[1]);
  for (let i = a; i <= b; i += 1) {
    isFlowerNum(i);
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
