//Leandro Nava Curra
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1;
	var descuento;
	var num1Int;

	num1= txtIdImporte.value;
	descuento= 0.25;

	num1Int= parseInt (num1);

	txtIdResultado.value= num1Int-(num1Int*descuento);


}
