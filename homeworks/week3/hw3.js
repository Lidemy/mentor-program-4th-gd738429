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
  	// 判斷邏輯
  	isPrime(Number(lines[i]))
  }
}

function isPrime(n){
	// 如果 n = 1
	if(n === 1){
		console.log('Composite')
		return
	}
	if(n === 2){
		console.log('Prime')
		return
	}
	// 用迴圈判斷是否被 1 以外的數整除, 是 => Composite , 否 => Prime
	for (let i = 2; i < n ; i++) {
		if( n % i === 0){
			console.log('Composite')
			return
		}
	}
	console.log('Prime')
}





