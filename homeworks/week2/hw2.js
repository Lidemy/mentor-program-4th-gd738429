function capitalize(str) {
  if(isFirstCharEnglish(str)){
  	var result = ''
  	result =  str.replace(str[0], str[0].toUpperCase())
  	return result
  }
  return str
}

function isFirstCharEnglish(str){
	if(str.charCodeAt(0) >= 'A'.charCodeAt(0) && str.charCodeAt(0) <= 'z'.charCodeAt(0)){
		return 1
	}
	return 0
}

console.log(capitalize('nick'));
