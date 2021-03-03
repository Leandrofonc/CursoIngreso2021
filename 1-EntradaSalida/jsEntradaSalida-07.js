//Leandro Nava Curra
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;
	

	num1 = parseInt (num1);
	num2 = parseInt (num2);

	resultado = num1 + num2;
	alert("el resultado es "+ resultado);	
}

function restar()
{
	var num1;
	var num2;
	var resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt (num1);
	num2 = parseInt (num2);

	resultado = num1 - num2;

	alert ("el resultado es "+ resultado);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt (num1);
	num2 = parseInt (num2);
	
	resultado= num1 * num2;

	alert("El resultado es "+ resultado);
}

function dividir()
{
	var num1;
	var num2;
	var resultado;

	num1= txtIdNumeroUno.value;
	num2= txtIdNumeroDos.value;

	num1= parseInt (num1);
	num2= parseInt (num2);

	resultado= num1 / num2;
	alert ("el resultado es "+ resultado);
}

