
function mostrar()
{
	//posibles variables a utilizar
	//tipoProducto
	//precioProducto
	//cantidadUnidadesProducto
	//marcaProducto
	//fabricanteProducto
	//maximoJabon
	//cantidadJabonMaxUnidades
	//maximoJabonFabricante
	
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var flagJabon= false;
	var cantidadJabonMaxUnidades;
	var maximoJabonFabricante;
	var maximoPrecioJabon;
	var mayorCantidadPorUnidad;
	var tipoConMayorCantidades;
	var promedioDelMayor;
	var acumuladorBarbijoCantidadUnidades=0;
	var precioDelMayor;

	//for (var i =0; i<5; i++)
	{		
		tipoProducto = prompt ("ingrese tipo de producto (jabon, barbijo, alcohol)");
		while (tipoProducto !="jabon" && tipoProducto !="barbijo" && tipoProducto !="alcohol")
		{
			tipoProducto=prompt ("hubo un error, ingrese el dato correcto");
		}
		
		precioProducto = prompt ("ingrese el precio del producto(entre 100 y 300)");
		precioProducto = parseInt (precioProducto);
		while (isNaN(precioProducto) ||precioProducto<100 || precioProducto>300)
		{
			precioProducto = prompt ("Valor incorrecto ingrese un numero entre 100 y 300");
			precioProducto = parseInt (precioProducto);
		}		
		
		cantidadUnidadesProducto =prompt ("ingrese la cantidad de productos a comprar(maximo 1000)");
		cantidadUnidadesProducto =parseInt (cantidadUnidadesProducto);
		while (isNaN(cantidadUnidadesProducto)||cantidadUnidadesProducto<1 || cantidadUnidadesProducto >1000);
			{
				cantidadUnidadesProducto =prompt ("hubo un error, ingrese las cantidades");
				cantidadUnidadesProducto =parseInt (cantidadUnidadesProducto);	
			}
		marcaProducto = prompt ("ingrese la marca del producto");
		while (isNaN(marcaProducto)==false || marcaProducto=="");
		{
			marcaProducto = prompt ("Hubo un error, ingrese la marca");
		}	

		fabricanteProducto = prompt ("Ingrese fabricante");
		while (isNaN(fabricanteProducto)==false || fabricanteProducto=="");
		{
			fabricanteProducto=prompt("Hubo un error, ingrese el dato");
		}
	}	
	console.log (cantidadUnidadesProducto)
	console.log (precioProducto)
	console.log (marcaProducto)
	console.log (fabricanteProducto)

	if (tipoProducto =="jabon")
	{
		if (flagJabon==false)
		{
			maximoPrecioJabon = precioProducto;
			cantidadJabonMaxUnidades = cantidadUnidadesProducto;
			maximoJabonFabricante = fabricanteProducto;
			flagJabon = true;
		}
		else if (precioProducto>maximoPrecioJabon)
		{
			maximoPrecioJabon = precioProducto;
			cantidadJabonMaxUnidades = cantidadUnidadesProducto;
			maximoJabonFabricante = fabricanteProducto;
		}

	}

	if (i==0)
	{
		mayorCantidadPorUnidad = cantidadUnidadesProducto;
		tipoConMayorCantidades = tipoProducto;
		precioDelMayor = precioProducto;
	}
	else if (cantidadUnidadesProducto>mayorCantidadPorUnidad)
	{
		mayorCantidadPorUnidad = cantidadUnidadesProducto;
		tipoConMayorCantidades = tipoProducto;
		precioDelMayor = precioProducto;
	}
	acumuladorBarbijoCantidadUnidades = acumuladorBarbijoCantidadUnidades + cantidadUnidadesProducto

}	
//if (flagJabon == false)
{
	//document.write ("Nunca se ingresaron tipo de jabones</br>")
}
//else 
{
	//document.write ("El fabricante del jabon mas caro es:" +"</br>");
}







	//for = cantidad en total de 5 productos
	//pedir tipo de producto ==validar
	//precioProducto ===validar
	//


	//es jabon ===condiciones===
	//canUnidadesBarbijo

/**Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
