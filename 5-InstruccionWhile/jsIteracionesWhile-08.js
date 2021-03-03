/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroPositivo;
	var numeroNegativo;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta;

	do 
	{
		numeroPositivo= prompt ("ingrese un numero positivo");
		numeroPositivo= parseInt (numeroPositivo);
		numeroNegativo = prompt ("ingrese un numero negativo");
		numeroNegativo= parseInt (multiplicacionNegativos);
		sumaPositivos= numeroPositivo+sumaPositivos;
		multiplicacionNegativos= numeroPositivo*multiplicacionNegativos;
		respuesta= prompt ("continuar?");
	}
	while (respuesta=="si")
	{
		sumaPositivos= prompt ("ingrese un numero positivo");
		sumaPositivos= parseInt (sumaPositivos)
		multiplicacionNegativos = prompt ("ingrese un numero negativo");
		multiplicacionNegativos= parseInt (multiplicacionNegativos);
		sumaPositivos= numeroPositivo+sumaPositivos;
		multiplicacionNegativos= numeroPositivo*multiplicacionNegativos;
		respuesta= prompt ("continuar?");
	}

	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN