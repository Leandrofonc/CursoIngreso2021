//Leandro Nava Curra
function mostrar()
{
    var precio;
    var descuento;
    var precioInt;
    var descuentoInt;

    precio= prompt ("ingrese precio");
    descuento= prompt ("ingrese descuento");

    precioInt = parseInt(precio);
    descuentoInt= parseInt (descuento);

    elPrecioFinal.value = precioInt - (precioInt*descuentoInt/100);

}
