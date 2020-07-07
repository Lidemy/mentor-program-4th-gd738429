const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(line) {
  const tmp = Number(line[0]);
  // 第一層for，印出幾行數字
  for (let i = 1; i <= tmp; i += 1) {
    let stars = '';
    // 第二層迴圈，印出單行幾顆星
    for (let j = 0; j < i; j += 1) {
      stars += '*';
    }
    console.log(stars);
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
