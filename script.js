/*  your css code here. If applicable */
 
for(let i = 1;i<=20;i++){
	if(i%3==0){
		alert("Fizz");
	}else if(i%5==0){
		alert("Buzz");
	}else if(i%3==0 && i%5==0){
		alert("FizzBuzz");
	}
}