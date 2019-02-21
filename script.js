function display(val){
		document.getElementById("d3").innerHTML+=val;
}

function e(){
	try{
			
			c(eval(document.getElementById("d3").innerHTML));
		}
	catch(e) 
			{
			  c('Error'); 
			}
}

function c(val) {
		document.getElementById("d3").innerHTML=val;
}


function sqrt1(){
	var x =  Math.sqrt(document.getElementById("d3").innerHTML);
	document.getElementById("d3").innerHTML = x;
}

function deleteChar() {
	var x = document.getElementById("d3").innerHTML;
	var y = x.substring(0, x.length - 1);
	document.getElementById("d3").innerHTML = y;
}

function percent() {
	var x = document.getElementById("d3").innerHTML;
	var y = x * 100;
	alert (x + "," + y);
	document.getElementById("d3").innerHTML = y;
}

function toggle() {
	var x = document.getElementById("d3").innerHTML;
	if (x.substring(0, 1) == "-") {
		var y = x.substring(1, x.length);
		document.getElementById("d3").innerHTML = y;
	} else {
		document.getElementById("d3").innerHTML = "-" + x;
	}
}


function leftParen() {
    document.getElementById("d3").innerHTML += "*(" ;

}

// function exp() {
	
// 	var exp = '^(' ;
// 	document.getElementById("d3").innerHTML += exp;
// }

// function leftParen() {
//     var x = document.getElementById("d3") ;
//     var y = document.getElementById("myPara") ;
//     x.innerText += "(" ;
//     y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
//     " * (" : "(" ;
// }
