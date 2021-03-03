/*>Realizar el algoritmo que permita ingresar 5 paises: </br>
				el continente (validar entre america , asia , europa ,africa y oceania) </br>
				el nombre del país, </br>
				cantidad de habitantes en millones entre 1 y 7000 (validar)</br>
				el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)  </br> 
				la temperaruta mínima que se registra en su territorio(entre -50 y 50)  </br>
				a)La cantidad de temperaturas pares.</br>
				b)la cantidad de temperaturas impares de europa</br>
				c)El nombre del pais con menos habitantes</br>
				d)la cantidad de paises que superan los 40 grados.</br>
				e)la cantidad de paises de america que tienen menos de 0 grados .</br>
				f)el promedio de habitantes entre los paises ingresados .</br>
				g)el promedio de habitantes entre los paises que superan los 40 grados  </br>      
				H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. </br>
				i) que continente tiene mas habitantes.</br>*
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio() {

	var continente;
	var pais;
	var cantHabitantes;
	var pobreza;
	var tempMinima;
	var contTemImpar = 0;
	var contTemPar = 0;
	var literalPaisMenosHab;
	var minHabitantes = false;
	var conTempAlta = 0;
	var conTempBajaAmerica = 0;
	var contPaises = 0;
	var acumuladorHabitantes = 0;
	var promedioHabitantes;
	var acumuladorHabitantes40 = 0;
	var promedioHabitantes40;
	var minTemperatura = false;
	var literalPaisTempMin;
	var maxHabitantesContinente = false;
	var literalContinenteMax;

	for (var i = 0; i < 5; i++) {

		continente = prompt("ingrese un continente");
		
		while (continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" &&continente != "oceania")
		{
			continente = prompt("dato incorrecto, ingrese nuevamente");
		}

		pais = prompt("ingrese pais");
		contPaises++
		cantHabitantes = prompt("ingrese cantidad de habitantes en millones (1 -7000");
		cantHabitantes = parseInt(cantHabitantes);
		while (isNaN(cantHabitantes)&& cantHabitantes > 1 && cantHabitantes < 7000) {
			cantHabitantes = prompt("Dato incorrecto, ingrese nuevamente");
		}
		acumuladorHabitantes += cantHabitantes


		if (minHabitantes == false) {
			minHabitantes = cantHabitantes;
			literalPaisMenosHab = pais;
		} else if (cantHabitantes < minHabitantes) {
			minHabitantes = cantHabitantes;
			literalPaisMenosHab = pais;
		}


		pobreza = prompt("ingrese nivel de pobreza(pobre,rico o muy rico");
		while (pobreza!= "pobre" && pobreza != "rico" && pobreza!= "muy rico"){
			pobreza= prompt ("dato incorrecto, ingrese pobreza nuevamente");
		}
		while (continente =="europa" && pobreza == "pobre"){
			pobreza= prompt ("en europa no hay pobres, ingrese otro valor");
		}
		tempMinima = prompt("ingrese temperatura minima del territorio (entre -50 y 50 grados");
		tempMinima = parseInt(tempMinima);
		while (tempMinima<-50 || tempMinima> 50){
			tempMinima= prompt ("Dato invalido, ingresar devuelta");
			tempMinima= parseInt (tempMinima);
		}
		if (tempMinima % 2 == 0) {
			contTemPar++;
		}
		else {
			if (continente == "europa") {
				contTemImpar++;
			}

		}

		if (tempMinima > 40) {
			conTempAlta++;
			acumuladorHabitantes40 += cantHabitantes;
		}
		if (tempMinima < 0 && continente == "america") {
			conTempBajaAmerica++;
		}
		if (minTemperatura == false) {
			minTemperatura = tempMinima;
			literalPaisTempMin = pais;
		}
		if (tempMinima < minTemperatura) {
			minTemperatura = tempMinima;
			literalPaisTempMin = pais;
		}

		if (maxHabitantesContinente == false) {
			maxHabitantesContinente = cantHabitantes;
			literalContinenteMax = continente;
		}
		else if (cantHabitantes > maxHabitantesContinente) {
			maxHabitantesContinente = cantHabitantes;
			literalContinenteMax = continente;
		}


	}

	promedioHabitantes = acumuladorHabitantes / contPaises;
	promedioHabitantes40 = acumuladorHabitantes40 / conTempAlta;

	document.write("la cantidad de temperaturas pares es: "+contTemPar+"</br>");
	document.write("La cantidad de temperaturas impares de europa es: "+ contTemImpar+"</br>");
	document.write("El nombre del pais con menos habitantes es: "+literalPaisMenosHab+"</br>");
	document.write("la cantidad de paises que superan los 40 grados es: "+conTempAlta+"</br>");
	document.write("La cantidad de paises de america que tienen menos de 0 grados es: "+conTempBajaAmerica+"</br>");
	document.write("el promedio de habitantes entre los paises ingresados es: "+promedioHabitantes+"</br>");
	document.write("el promedio de habitantes entre los paises que superan los 40 grados es: "+ promedioHabitantes40+"</br>");
	document.write("La temperatura minima ingresa es: "+minTemperatura + ", y el nombre del pais es: "+ literalPaisTempMin+"</br>");
	document.write("El continente que tiene mas habitantes es: "+ literalContinenteMax+"</br>");
}

/*>Realizar el algoritmo que permita ingresar 5 paises: </br>
				el continente (validar entre america , asia , europa ,africa y oceania) </br>
				el nombre del país, </br>
				cantidad de habitantes en millones entre 1 y 7000 (validar)</br>
				el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)  </br> 
				la temperaruta mínima que se registra en su territorio(entre -50 y 50)  </br>
				a)La cantidad de temperaturas pares.</br>
				b)la cantidad de temperaturas impares de europa</br>
				c)El nombre del pais con menos habitantes</br>
				d)la cantidad de paises que superan los 40 grados.</br>
				e)la cantidad de paises de america que tienen menos de 0 grados .</br>
				f)el promedio de habitantes entre los paises ingresados .</br>
				g)el promedio de habitantes entre los paises que superan los 40 grados  </br>      
				H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. </br>
				i) que continente tiene mas habitantes.</br>*
 * Aqui dentro probar el codigo que quieran
 */