const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(line) {
  const str = line[0];
  let tmpStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    tmpStr += str[i];
  }
  if (tmpStr === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
