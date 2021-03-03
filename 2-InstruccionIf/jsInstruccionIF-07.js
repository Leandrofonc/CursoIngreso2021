function mostrar()
{
	//tomo la edad  
	var edad;
	var eCivil;
	edad=txtIdEdad.value;
	edad= parseInt (edad);
	eCivil=estadoCivil.value;

	if (edad<18 && eCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	
	


}//FIN DE LA FUNCIÓN