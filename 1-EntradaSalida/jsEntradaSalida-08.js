//Leandro Nava Curra
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var numInt1;
	var numInt2;
	var resultado;


	num1=txtIdNumeroDividendo.value;
	num2=txtIdNumeroDivisor.value;

	numInt1 = parseInt (num1);
	numInt2 = parseInt (num2);

	resultado = numInt1 % numInt2;
 
		alert("el resto es "+ resultado);
}
