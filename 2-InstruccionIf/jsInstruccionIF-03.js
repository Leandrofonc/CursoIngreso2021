function mostrar()
{
	var edad;

	edad= txtIdEdad.value;
	edad= parseInt (edad);
	if (edad>="18"){
		alert ("usted es mayor de edad");
	}
	if (edad <"18"){
		alert ("usted es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN