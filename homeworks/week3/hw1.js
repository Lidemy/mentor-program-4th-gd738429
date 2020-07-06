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
	let tmp = Number(lines[0])
	//第一層for，印出幾行
  for (let i =  1; i <= tmp; i++) {
  	let stars = ''
  	//第二層迴圈，印出單行幾顆星
  	for (let j = 0; j < i; j++) {
  		stars += '*'
  	}
  	console.log(stars)
  }
}