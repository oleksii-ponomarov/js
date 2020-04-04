function sum() {
	var a=document.getElementById("numa").value;
	var b=document.getElementById("numb").value;

	var result=parseFloat(a)+parseFloat(b);

	if(!isNaN(result)) {
	document.getElementById("result").innerHTML="The answer is "+result;
	} else {
		document.getElementById("result").innerHTML="Enter two numbers";
	}
}
