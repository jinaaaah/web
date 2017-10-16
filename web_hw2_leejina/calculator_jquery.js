
var $output = $("#output");
var $num = $(".button--num");
var $operator = $(".button--operator");
var $clear = $(".button--clear");
var isOperated = false;
var operatorSign = null;
var rightNum = 0;
var leftNum = 0;
var result = 0;

function output(value){
	$output.val(value);
}

function checkOperator(value){
	return value === '/' || value === '*' || value === '+' || value === '-';
}

function calculate(a, b, operation){

	if (operation === '+') return a + b;
	if (operation === '-') return a - b;
	if (operation === '*') return a * b;
	if (operation === '/') 
		return Math.round(a / b);
}

function pressNum(value){
	if(isOperated == true){
		if(rightNum == 0){
			rightNum = value;
		}else{
			rightNum += value;
		}
		output(rightNum);
	}else{
		if(leftNum == 0){
			leftNum = value;
		}else{
			leftNum += value;
		}
		output(leftNum);
	}

}

function getOutput(){
	if(rightNum != 0 && leftNum != 0){
		result = calculate(parseInt(leftNum), parseInt(rightNum),operatorSign);
		output(result);
		leftNum = result;
	}
}

function clear(){
	isOperated = false;
	rightNum = 0;
	leftNum = 0;
	$output.val("0");
	result = 0;
}

$num.on("click",function(){
	pressNum($(this).html());
})

$('.button--clear').on("click",clear);

$operator.on("click",function(){
	if(checkOperator($(this).html())){
		isOperated = true;
		operatorSign = $(this).html();
	}else{
		getOutput();
	}
})













