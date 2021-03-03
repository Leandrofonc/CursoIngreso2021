//Leandro Nava Curra
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaF;
    var temperaturaFInt;
    var temperaturaCelsius;

    temperaturaF= txtIdTemperatura.value;
    temperaturaFInt= parseInt(temperaturaF);
    temperaturaCelsius= (temperaturaFInt -32) /1.8;


    alert(temperaturaF+" grados fahrenheit son "+temperaturaCelsius+ " grados celsius");


	
}

function CentigradosFahrenheit () 
{
    var temperaturaCelsius;
    var temperaturaCelsiusInt;
    var temperaturaF;

    temperaturaCelsius= txtIdTemperatura.value;
    temperaturaCelsiusInt= parseInt(temperaturaCelsius);
    temperaturaF= (temperaturaCelsiusInt*1.8)+32;

    alert (temperaturaCelsius+" grados celsius son " + temperaturaF+ " grados fahrenheit")


}
