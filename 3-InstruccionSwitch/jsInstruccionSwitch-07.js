function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch (destinoIngresado) {
		case "Bariloche":
			alert ("Se encuentra al Oeste");
			break;
		case "Mar del plata":
			alert("se encuentra al Este");
			break;
		case "Cataratas":
			alert ("Se encuentra al Norte");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur")
			break;
	}

}//FIN DE LA FUNCIÓN