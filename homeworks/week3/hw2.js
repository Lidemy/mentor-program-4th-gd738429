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
//153 = 1
function solve(lines) {
  let tmp = lines[0].split(' ')
  let a = Number(tmp[0])
  let b = Number(tmp[1])
  for(let i = a ; i <= b; i++){
  	isFlowerNum(i)
  }
}

function isFlowerNum(n){
	var tempStr = '' + n
	var result = 0
	for(let i = 0; i < tempStr.length; i++){
		result += Math.pow(Number(tempStr[i]),tempStr.length)
	}
	if(result == n) console.log(result)
}
