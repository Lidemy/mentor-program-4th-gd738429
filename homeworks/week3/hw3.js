const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function isPrime(n) {
  // 如果 n = 1
  if (n === 1) {
    console.log('Composite');
    return;
  }
  if (n === 2) {
    console.log('Prime');
    return;
  }
  // 用迴圈判斷是否被 1 以外的數整除,是 => Composite ,否 => Prime
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      console.log('Composite');
      return;
    }
  }
  console.log('Prime');
}

function solve(line) {
  const row = Number(line[0]);
  // 迴圈跑 row 筆資料
  for (let i = 1; i <= row; i += 1) {
    // 判斷邏輯
    isPrime(Number(line[i]));
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
