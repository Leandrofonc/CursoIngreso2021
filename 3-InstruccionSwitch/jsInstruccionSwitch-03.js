function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");		
			break;
		default:
			alert("este mes tiene 30 dias o mas")
			break;
	}
	
	


}//FIN DE LA FUNCIÓN