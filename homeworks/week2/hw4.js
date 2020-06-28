function printFactor(n) {
  for(i = 1 ; i <= n ; i++){
  	if( n % i ) continue
  	console.log(i)
  }
}

printFactor(100);
