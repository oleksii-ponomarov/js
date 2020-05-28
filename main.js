function sum() {
	var a=document.getElementById("numa").value;
	var b=document.getElementById("numb").value;

	var result=parseFloat(a)+parseFloat(b);

	if(isNaN(result)) {
		document.getElementById("result").innerHTML="Enter two numbers";
		return
	}
	
	document.getElementById("result").innerHTML="The answer is "+result;
}

function carMove() {
	var car = document.getElementById("car");
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == 85) {
			clearInterval (id)
		} else {
			pos++
			car.style.left = pos + "%";
		}
	}
}
