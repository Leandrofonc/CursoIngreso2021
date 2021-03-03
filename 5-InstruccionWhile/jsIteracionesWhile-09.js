/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar;
	var contador=0;
	var flag="es la primera vez";
	//iniciar variables
	do
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (flag== "es la primera vez")
		{
			numeroMaximo= numeroIngresado;
			numeroMinimo= numeroIngresado;
			flag= "ya pase";
		}
		else 
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}

			else if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		console.log ("numero maximo " +numeroMaximo);
		console.log ("numero minimo " +numeroMinimo);
		continuar = confirm("Desea continuar?");
		contador++;
	}
	while (continuar == true)
	{

	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN