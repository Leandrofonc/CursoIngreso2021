function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert ("en el destino hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert ("En el destino hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN