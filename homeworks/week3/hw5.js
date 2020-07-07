const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

function compare(a, b, judge) {
  let ans = '';
  // 兩數位數相同
  if (a.length === b.length) {
    // 用迴圈比較每個位數的大小，並找出較大的數
    for (let i = 0; i < a.length; i += 1) {
      if (Number(a[i]) > Number(b[i])) {
        ans = 'A';
        break;
      } else if (Number(a[i]) < Number(b[i])) {
        ans = 'B';
        break;
      } else {
        break;
      }
    }
  } else {
    ans = a.length > b.length ? 'A' : 'B';
  }
  // 判斷比較方式決定輸出
  if (judge === '1') {
    // 比大，直接印出
    console.log(ans);
  } else {
    // 比小，反轉結果
    console.log((ans === 'A') ? 'B' : 'A');
  }
}

function solve(line) {
  const row = Number(line[0]);
  // 迴圈跑 row 筆資料
  for (let i = 1; i <= row; i += 1) {
    // 設定每筆輸入
    const tmpStr = lines[i].split(' ');
    const inputA = tmpStr[0];
    const inputB = tmpStr[1];
    const judgeType = tmpStr[2];
    // 先判斷兩數是否相等
    if (inputA === inputB) {
      console.log('DRAW');
    } else {
      // 不相等再比較邏輯
      compare(inputA, inputB, judgeType);
    }
  }
}

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
