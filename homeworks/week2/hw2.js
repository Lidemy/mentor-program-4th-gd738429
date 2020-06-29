function capitalize(str) {
  if(isFirstCharEnglish(str)){
  	str =  str.replace(str[0], str[0].toUpperCase())
  }
  return str
}

function isFirstCharEnglish(str){
		return (str.charCodeAt(0) >= 'A'.charCodeAt(0) && str.charCodeAt(0) <= 'z'.charCodeAt(0)) ? true : false
}

console.log(capitalize('hello'));
