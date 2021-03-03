/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=0; 
	var acumulador= 11;

	while (contador <10) 
	{
		acumulador= acumulador-1;
		alert (acumulador);
		contador = contador +1
	}

}//FIN DE LA FUNCIÓN