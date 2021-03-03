/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt (numeroIngresado);

	while (!(numeroIngresado >=0 && numeroIngresado <=9))
	
	{
		numeroIngresado = parseInt (numeroIngresado);
		numeroIngresado= prompt ("Por favor ingrese un numero entre 0 y 9");
	}

	txtIdNumero.value= numeroIngresado;
	alert ("El numero ingresado fue "+numeroIngresado);
}//FIN DE LA FUNCIÓN