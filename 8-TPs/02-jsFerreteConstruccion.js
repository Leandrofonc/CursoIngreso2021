//Leandro Nava Curra
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    var largo;
    var ancho;
    var largoInt;
    var anchoInt;
    var perimetro;
    var hilos = 3;
    var resultado;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largoInt = parseInt (largo);
    anchoInt = parseInt (ancho);
    perimetro = (anchoInt+largoInt)*2;
    resultado = perimetro*hilos;

    alert ("se debe comprar " + resultado +" metros de alambre");

}
function Circulo () 
{
    var radio;
    var radioInt;
    var perimetro;
    var hilos = 3;
    var resultado;

    radio = txtIdRadio.value;
    radioInt = parseInt (radio);
    perimetro = (radioInt *2) *3.14;
    resultado = perimetro*hilos;
    

    alert ("se debe comprar "+ resultado+" metros de alambre");



	
}
function Materiales () 
{

    var ancho;
    var largo;
    var anchoInt;
    var largoInt;
    var superficie;
    var bolsasCal;
    var bolsasCemento;

    ancho = txtIdAncho.value;
    largo = txtIdLargo.value;
    anchoInt = parseInt (ancho);
    largoInt = parseInt (largo);
    superficie = anchoInt+largoInt *2;
    bolsasCal = superficie*3;
    bolsasCemento = superficie*2;

    alert ("Se necesitan "+ bolsasCal +" de bolsas de Cal y"+ bolsasCemento+ " de bolsas de cemento");

	
}