function display(val)
		{
		document.getElementById("d3").innerHTML+=val;
		};

function e(){
	try{
			
			c(eval(document.getElementById("d3").innerHTML));
		}
	catch(e) 
			{
			  c('Error') 
			}
}

function c(val) {
		document.getElementById("d3").innerHTML=val;
		}


function sqrt1(){
	var x =  Math.sqrt(document.getElementById("d3").innerHTML);
	document.getElementById("d3").innerHTML = x;
};