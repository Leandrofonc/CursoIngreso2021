//Leandro Nava Curra

function mostrar()
{
	var numero;
	numero = Math.round(Math.random()*10);

	if (numero >8)
	{
		alert ("EXCELENTE "+numero );
	}
	else if (numero >4 && numero <9)
	{
		alert ("APROBÓ "+numero);
	}
	else
	{
		alert ("Vamos, la proxima se puede "+numero);
	}


}//FIN DE LA FUNCIÓN