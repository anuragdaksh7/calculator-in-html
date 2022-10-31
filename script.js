

function ac() {
	//console.log("wa");
	document.getElementById("enter").value = "0";
}
function one() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "1";
		} else {
			a.value = a.value+"1";
		}

	}
}
function two() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "2";
		} else {
			a.value = a.value+"2";
		}

	}
}
function three() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "3";
		} else {
			a.value = a.value+"3";
		}

	}
}
function four() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "4";
		} else {
			a.value = a.value+"4";
		}

	}
}
function five() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "5";
		} else {
			a.value = a.value+"5";
		}

	}
}
function six() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "6";
		} else {
			a.value = a.value+"6";
		}

	}
}
function seven() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "7";
		} else {
			a.value = a.value+"7";
		}

	}
}
function eight() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "8";
		} else {
			a.value = a.value+"8";
		}

	}
}
function nine() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "9";
		} else {
			a.value = a.value+"9";
		}

	}
}
function zero() {
	var a = document.getElementById("enter");
	if (a) {
		if (a.value == "0" ){
			a.value = "0";
		} else {
			a.value = a.value+"0";
		}

	}
}
function sub() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = eval(a.value);
	}
}
function sq() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "((" + a.value + ")**2)";
	}
	sub();
}
function modulo() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = a.value + "%";
	}
}
function divide() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = a.value + "/";
	}
}
function multi() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = a.value + "*";
	}
}
function minus() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = a.value + "-";
	}
}
function add() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = a.value + "+";
	}
}




function decimal() {
	var a = document.getElementById("enter");

	if (a) {
		if (a.value.indexOf(".")==-1){
			a.value = a.value + ".";
		} else {
			var c = a.value.indexOf(".");
			var d = a.value.slice(c+1);
			var e = d.indexOf(".")+c+1;
			var f = a.value.slice(c,e);
			
		}
	}
}
function plusminus() {
	var a = document.getElementById("enter");
	if (a) {

		a.value = "-(" + a.value + ")";
	}
	sub();
}


function sqrt() {
	//alert("hm");
	var a = document.getElementById("enter");
	//alert(a);
	if (a) {
		a.value = "((" + a.value + ")**(0.5)).toFixed(2)";
	}
	sub();
}

function sin() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "Math.sin("+a.value+").toFixed(2)";
	}
	sub();
}
function pie() {
	document.getElementById("enter").value = `${Math.PI.toFixed(2)}`;
}
function cos() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "Math.cos("+a.value+").toFixed(2)";
	}
	sub();
}
function tan() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "Math.tan("+a.value+").toFixed(2)";
	}
	sub();
}
function ln() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "Math.log("+a.value+").toFixed(2)";
	}
	sub();
}
function log() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "(Math.log("+a.value+")/Math.log(10)).toFixed(2)";
	}
	sub();
}
function ee() {
	//console.log()
	document.getElementById("enter").value = `${Math.E.toFixed(2)}`;
}
function inv() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = 1/a.value +".toFixed(2)";
	}
	sub();
}
function mod() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "Math.abs("+a.value+")";
	}
	sub();
}
function self() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "(" + a.value + "**" + a.value + ").toFixed(2)";
	}
	sub();
}

function ex() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "(Math.E**" + a.value + ").toFixed(2)";
	}
	sub();
}
function gif(){
	var a = document.getElementById("enter");
	if (a) {
		a.value = "Math.floor(" + a.value + ")";
	}
	sub();
}
function ff(){
	var a = document.getElementById("enter");
	if (a) {
		a.value = a.value + "-Math.round(Math.floor(" + a.value + "))";
	}
	sub();
}
function factt(x) {
	if (x <0) {
		return NaN;
	}
	if (x ==0 ) {
		return 1;
	}
	return factt(x-1)*x;
}
function fact() {
	var a = document.getElementById("enter");
	if (a) {
		a.value = "(factt(" + a.value + "))";
	}
	sub();
}