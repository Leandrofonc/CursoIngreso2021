/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaracion
	var numero;
	var contador=0;
	var resultado=0;

	while (contador<5) 
	{
		numero = prompt ("ingrese numero");
		numero = parseInt (numero);
		resultado= resultado+numero;
		contador = contador +1;

	}

	alert(resultado);
	

}

