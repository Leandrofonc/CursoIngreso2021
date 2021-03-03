//Leandro Nava Curra
function mostrar()
{   
    var ancho;
    var largo;
    var anchoInt;
    var largoInt;
    var perimetro;

    ancho = prompt ("ingrese el ancho del rectangulo");
    largo = prompt ("ingrese el largo del rectangulo");

    largoInt = parseInt (largo);
    anchoInt = parseInt (ancho);

    perimetro = 2* (largoInt+anchoInt);

    alert ("el perimetro es " + perimetro);

}
