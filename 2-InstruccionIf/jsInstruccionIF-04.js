function mostrar()
{
	//tomo la edad  

	var edad;
	edad= txtIdEdad.value;
	edad= parseInt (edad);

	if (edad>=13 || edad>=17){
		alert ("usted es adolescente");
	}
	else 
	{
		alert ("usted es menor de edad");
	}
	


}//FIN DE LA FUNCIÓN