var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let row = Number(lines[0])
  // 迴圈跑 row 筆資料
  for (let i = 1; i <= row; i++) {
  	//設定每筆輸入
  	let tmpStr = lines[i].split(' ')
  	let inputA = tmpStr[0]
  	let inputB = tmpStr[1]
  	let judgeType = tmpStr[2]
  	// 先判斷兩數是否相等
  	if(inputA === inputB){
  		console.log('DRAW')
  		continue
  	}
  	// 不相等再比較邏輯
  	compare(inputA, inputB, judgeType)
  }
}

function compare(a, b, judge){
	let ans = ''
	// 兩數位數相同
	if(a.length === b.length){
		//用迴圈比較每個位數的大小，並找出較大的數
		for (let i = 0; i < a.length; i++) {
			if(Number(a[i]) > Number(b[i])){
				ans = 'A'
				break
			}else if(Number(a[i]) <  Number(b[i])){
				ans = 'B'
				break
			}
		}
	}
	// 兩數位數不同
	else{
		ans = a.length > b.length ? 'A' : 'B'
	}
	// 判斷比較方式決定輸出
	if(judge === '1'){
		//比大，直接印出
		console.log(ans)
	}else{
		//比小，反轉結果
		console.log((ans === 'A')? 'B' : 'A')
	}
}


