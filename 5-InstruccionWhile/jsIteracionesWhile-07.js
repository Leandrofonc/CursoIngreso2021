/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado1;
	var numeroIngresado2;
	contador=0;
	acumulador=0;
	respuesta= "si";

	do
	{
		numeroIngresado1= prompt ("ingrese un numero 1");
		numeroIngresado1= parseInt (numeroIngresado1);
		numeroIngresado2= prompt ("ingrese un numero 2");
		numeroIngresado2= parseInt (numeroIngresado2);
		acumulador= acumulador+ numeroIngresado1+ numeroIngresado2;
		respuesta= prompt ("Desea continuar?")
	}
	while (respuesta=="si") 
	{
		numeroIngresado1= prompt ("ingrese un numero 1");
		numeroIngresado1= parseInt (numeroIngresado1);
		numeroIngresado2= prompt ("ingrese un numero 2");
		numeroIngresado2= parseInt (numeroIngresado2);
		acumulador= acumulador+ numeroIngresado1+ numeroIngresado2;
		contador++
		respuesta= prompt ("Desea continuar?")
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN