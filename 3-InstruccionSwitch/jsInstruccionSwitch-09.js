function mostrar()
{

	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var estadiaBase= 15000;
	var aumento10 =estadiaBase*10/100 + estadiaBase
	var aumento20 =estadiaBase*20/100 + estadiaBase
	var descuento10 = estadiaBase - estadiaBase*10/100
	var descuento20 = estadiaBase - estadiaBase*20/100

	alert (destinoIngresado);
	alert (estacionIngresada);

	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert ("El costo de la estadia es de " +aumento20);
					break;
				case "Cataratas":
				case "Cordoba":
					alert ("El costo de la estadia es de " +descuento10);
					break;
				case "Mar del plata":
					alert ("El costo de la estadia es de " + descuento20);		
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert ("El costo de la estadia es de " +descuento20);
					break;
				case "Cataratas":
				case "Cordoba":
					alert ("El costo de la estadia es de " +aumento10);
					break;
				case "Mar del plata":
					alert ("El costo de la estadia es de " + aumento20);		
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert ("El costo de la estadia es de " + aumento10);		
					break;
				case "Cordoba":
					alert ("El costo de la estadia es de " +estadiaBase);
					break;

			}
			break;
	}
}

//FIN DE LA FUNCIÓN