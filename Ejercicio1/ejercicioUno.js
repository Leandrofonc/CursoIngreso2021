/**Para un censo municipal debemos cargar los datos de <b>TODAS</b> las mascotas de nuestra veterinaria:</p>
            <p> necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos) </br>
                el tipo de pelaje (corto, largo , sin pelo),</br>
                la edad de la mascota (edad validada);</br>
                el nombre (una palabra) </br>
                la raza  (una palabra) </br>
                el peso (peso validado) </br>
                el estadoClinico (enfermo,internado o adopcion)</br>
                la temperaruta corporal</br></br>
                
                y nos piden informar solo si existe</br>
                a)El perro mas pesado</br>
                b)El porcentaje de enfermos sobre el total de mascotas</br>
                c)El nombre de la ultima mascota de tipo "otra cosa"</br>
                d)El animal sin pelo con menor temperatura corporal</br>
                e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal</br>
                f)Sumando gatos y perros que porcentaje del total de mascotas son?</br>
                g)Que estado clinico tiene la menor cantidad de mascotas </br>
                H)Cual es el promedio de kilos de peso de tomando todas las mascotas </br>
                i)El nombre y raza del gato sin pelos mas liviano</br>
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio() {
    var tipo;
    var pelaje;
    var edad;
    var nombre;
    var raza;
    var peso;
    var estadoClinico;
    var temperatura;
    var perroMasPesado = 0;
    var contadorPerro = 0;
    var contadorEnfermos = 0;
    var porcentajeEnfermos;
    var contadorMascotas = 0;
    var ultimoNombre;
    var contadorGatos = 0;
    var porcentajeGatosyPerros;
    var totalGatosyPerros;
    var menorTemp = 60;
    var confirmar= "si":

    // Variables punto PUNTO E
    var auxPedir = 0;

    var contPerro = 0;
    var contGato = 0;
    var contOtraCosa = 0;

    var acumPerro = 0;
    var acumGato = 0;
    var acumOtraCosa = 0;

    var maxTempPromPerro;
    var maxTempPromGato;
    var maxTempPromOtraCosa;

	var contEnfermo=0;
	var contInternado=0;
	var contAdopcion=0;
	var literalClinico;
	var minimoClinico;
	var acumuladorKilos=0;
	var promedioKilos;
	var nombreRaza;
	var minPesoSinPelo=false;
	
	
    var auxMaxTemp=0;
    var literal;
    //


    while (continuar=="si") {
	    
        tipo = prompt("ingrese el tipo de animal (Gato/perro/otra cosa)");
        while (tipo != "gato" && tipo != "perro" && tipo != "otra cosa") {
            tipo = prompt("hubo un error, ingrese el dato correcto");
        }
        contadorMascotas++;
        pelaje = prompt("ingrese el tipo pelaje (corto/largo/sin pelo)");
        while (pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo") {
            pelaje = prompt("hubo un error, ingrese el dato correcto");
        }
        edad = prompt("ingrese la edad el animal");
        while (isNaN(edad)) {
            edad = prompt("hubo un error, ingrese el dato correcto");
        }
        nombre = prompt("Ingrese el nombre del animal (una sola palabra)");
        while (!isNaN(nombre)) {
            nombre = prompt("hubo un error, por favor ingrese el dato correcto")
        }
        if (tipo == "otra cosa") {
            ultimoNombre = nombre;
        }
        raza = prompt("ingrese la raza del animal");
        while (!isNaN(raza)) {
            raza = prompt("hubo un error, por favor ingrese el dato correcto");
        }
        peso = prompt("ingrese el peso del animal");
        peso = parseFloat(peso);
        while (isNaN(peso)) {
            peso = prompt("hubo un error, ingrese el dato correcto");
            peso = parseFloat(peso);
        }
		
		if (pelaje == "sin pelo" && tipo=="gato"){
			
			if (minPesoSinPelo==false) {
				minPesoSinPelo= peso;
				nombreRaza = nombre + " " + raza;
			
			}else { 
				if (peso<minPesoSinPelo){ 
					minPesoSinPelo = peso;
					nombreRaza = nombre + " " + raza;
				}
			}
		}

		acumuladorKilos+=peso; 
        if (tipo == "perro") {
            contadorPerro++;
            if (perroMasPesado < peso) {
                perroMasPesado = peso;
            }

        }
        if (tipo == "gato") {
            contadorGatos++;
        }


        estadoClinico = prompt("ingrese el estado clinico del animal (Enfermo, internado, adopcion");
        while (estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion") {
            estadoClinico = prompt("Hubo un error, por favor ingrese el dato correcto");
        }
        if (estadoClinico == "enfermo") {
            contadorEnfermos++;
        }
        temperatura = prompt("Ingrese la temperatura del animal");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || temperatura < 25 || temperatura > 60) {
            temperatura = prompt("Hubo un error ,por favor ingrese el dato correcto");
			temperatura = parseInt (temperatura);
        }

        //ACUMULO TEMPERATURA POR MASCOTAS Y ACUMULO SUS TEMPERATURAS
        switch (tipo) {
            case 'perro':
                contPerro++;
                acumPerro += temperatura;
                break;

            case 'gato':
                contGato++;
                acumGato += temperatura;
                break;

            case 'otra cosa':
                contOtraCosa++;
                acumOtraCosa += temperatura;
                break;
        }
			//SWITCH PUNTO G
	switch (estadoClinico) {
		case 'enfermo':
			contEnfermo++;
				break;

		case 'internado':
			contInternado++;
			break;

		case 'adopcion':
			contAdopcion++;
			break;
	
		 }
    continuar= prompt ("desea continuar? (si/no)");
    }


    // E
    maxTempPromPerro = acumPerro / contPerro; 
    maxTempPromGato = acumGato / contGato;
    maxTempPromOtraCosa = acumOtraCosa / contOtraCosa;
	
   
	

	if (maxTempPromPerro  > auxMaxTemp){
		auxMaxTemp = maxTempPromPerro;
		literal = 'perro';
	}
    

    if (maxTempPromGato > auxMaxTemp) {
        auxMaxTemp = maxTempPromGato;
        literal = 'gato';
    }

    if (maxTempPromOtraCosa > auxMaxTemp){
        auxMaxTemp = maxTempPromOtraCosa;
        literal = 'otra cosa';
    }
    //

    if (pelaje == "sin pelo") {
        if (temperatura < menorTemp)
            menorTemp = temperatura;
    }
    if (contadorEnfermos > 1) {
        porcentajeEnfermos = contadorMascotas / contadorEnfermos;
    }

	if (contEnfermo<=contadorMascotas){
		minimoClinico= contEnfermo;
		literalClinico= "enfermo"; 
	}
	if (contInternado < minimoClinico){
		minimoClinico = contInternado;
		literalClinico = "internado";
	}
	if (contAdopcion < minimoClinico){
		minimoClinico = contAdopcion;
		literalClinico = "adopcion"
	}
	
	promedioKilos= acumuladorKilos/contadorMascotas;

    totalGatosyPerros = contadorGatos + contadorPerro;
    porcentajeGatosyPerros = contadorMascotas / totalGatosyPerros;

    document.write("A)el perro mas pesado pesa " + perroMasPesado+"</br>");
    document.write("B)el porcentaje de enfermos es" + porcentajeEnfermos+ "</br>");
    document.write("C)El nombre de la ultima mascota de tipo otra cosa es:" +ultimoNombre+ "</br>");
    document.write("D)La temperatura del animal sin pelo con menor temperatura es: "+menorTemp);
    document.write("El promedio de Temp Max es: " + auxMaxTemp + " y corresponde al tipo: " + literal+"</br>");
    document.write("El estado clinico que tiene la menor cantidad de mascotas es: "+ literalClinico+ "</br>");
	document.write("el promedio de gatos y perros es " +porcentajeGatosyPerros+"</br>")
    document.write("El promedio de kilos de todas las mascotas es: "+promedioKilos+"</br>");
	document.write("El nombre y raza del gato sin pelos mas liviano es: "+ nombreRaza+ "</br>") ;
}