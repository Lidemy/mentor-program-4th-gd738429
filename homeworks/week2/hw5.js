[1,2,3] , ','
function join(arr, concatStr) {
	var result = ''
	for(i = 0 ; i < arr.length; i++){
  	if(i === arr.length - 1){
  		result += arr[i]
  		break
  	}
  	result +=  (arr[i] + concatStr)
  }
  return result
}

function repeat(str, times) {
	var tmpStr = str
  for(i = 1 ; i < times; i++){
  	str += tmpStr
  }
  return str
}

console.log(join(['1','2','3','4'], '!'));
console.log(repeat('a', 5));
console.log(repeat('HelloWorld', 4))