/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	
	var numeroIngresado;
	var continuar;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	//generar un bucle del tipo mientras el usuario quiera (do while)

	do
	{
	//pido un numero
	numeroIngresado = prompt ("ingrese un numero");
	numeroIngresado = parseInt (numeroIngresado);

	//analizar el signo del numero y actuar en consecuencia
		if (numeroIngresado>0)
		{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
		}
		else if (numeroIngresado==0)
		{
			contadorCeros++;
		}
		else
		{
			sumaNegativos += numeroIngresado;
			contadorNegativos++;
		}
	//analizar si el numero es paridad

		if (numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}

		continuar = prompt("Ingresar otro numero?");
	}
	while ( continuar== "si");
	{
		promedioPositivos= sumaPositivos/contadorPositivos;
		promedioNegativos= sumaNegativos/contadorNegativos;
		diferencia = contadorPositivos - contadorNegativos;
	}
	



	//codigo despues del bucle
	//hacer los calculos que necesiten los datos conseguidos duarnte el bucle

	//muestro los resultados


	
	//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("La suma de positivos es :"+sumaPositivos);
	document.write("La cantidad de positivos es:"+contadorPositivos);
	document.write("La cantidad de negativos es:"+contadorNegativos);
	document.write("la cantidad de ceros es:"+contadorCeros);
	document.write("la cantidad de numeros pares es:"+contadorPares);
	document.write("El promedio de positivos es:"+promedioPositivos);
	document.write("El promedio de negativos es:"+promedioNegativos);
	document.write("la diferencia entre positivos y negativos es:"+diferencia);

}//FIN DE LA FUNCIÓN

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */