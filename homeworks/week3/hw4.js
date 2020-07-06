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
	let str = lines[0]
	let tmpStr = ''
	for (let i = str.length - 1; i >= 0; i--) {
		tmpStr += str[i]
	}
	if(tmpStr === str){
		console.log('True')
	}else{
		console.log('False')
	}
}