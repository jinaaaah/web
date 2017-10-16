
var output = document.getElementById("output");
var num  = document.getElementsByClassName("button--num");
var operator  = document.getElementsByClassName("button--operator");
var clear  = document.getElementsByClassName("button--clear");

var isOperated = false;
var operatorSign = null;
var rightNum = 0;
var leftNum = 0;
var result = 0;

function setOutput(pvalue){
	output.value = pvalue;
}

function checkOperator(pvalue){
	return pvalue === '/' || pvalue === '*' || pvalue === '+' || pvalue === '-';
}

function calculate(a, b, operation){

	if (operation === '+') return a + b;
	if (operation === '-') return a - b;
	if (operation === '*') return a * b;
	if (operation === '/') 
		return Math.round(a / b);
}

function pressNum(pvalue){
	if(isOperated == true){
		if(rightNum == 0){
			rightNum = pvalue;
		}else{
			rightNum += pvalue;
		}
		setOutput(rightNum);
	}else{
		if(leftNum == 0){
			leftNum = pvalue;
		}else{
			leftNum += pvalue;
		}
		setOutput(leftNum);
	}

}

function getOutput(){
	if(rightNum != 0 && leftNum != 0){
		result = calculate(parseInt(leftNum), parseInt(rightNum),operatorSign);
		setOutput(result);
		leftNum = result;
	}
}

function makeClear(){
	isOperated = false;
	rightNum = 0;
	leftNum = 0;
	output.value = "0";
	result = 0;
}


for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener("click",function() { 
		if(checkOperator(this.innerHTML)){
		isOperated = true;
		operatorSign = this.innerHTML;
		}else{
			getOutput();
		}
	});
}


for(var i = 0; i < num.length; i++){
	num[i].addEventListener("click",function() { 
		pressNum(this.innerHTML);
	});
}

clear[0].addEventListener("click",makeClear);












