function multiplicar()
{
	var x = new Array();
	x[0] = document.getElementById('num1').value;
	x[1] = document.getElementById('num2').value;
	var resultado = 0;
	resultado = (x[0]*x[1]);
	
	alert("el resultado de la multiplicacion es: "+resultado);	
	
	
}

function dividir()
{
	var x = new Array();
	x[0] = document.getElementById('num11').value;
	x[1] = document.getElementById('num22').value;
	var resultado = 0;
	resultado = (x[0]/x[1]);
	
	alert("el resultado de la division es: "+resultado);
}