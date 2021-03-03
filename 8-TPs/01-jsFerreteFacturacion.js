//Leandro Nava Curra
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    var producto1;
    var producto2;
    var producto3;
    var producto1Int;
    var producto2Int;
    var producto3Int;
    var resultado;

    producto1= txtIdPrecioUno.value;
    producto2= txtIdPrecioDos.value;
    producto3= txtIdPrecioTres.value;

    producto1Int= parseInt (producto1);
    producto2Int= parseInt (producto2);
    producto3Int= parseInt (producto3);

    resultado= producto1Int + producto2Int + producto3Int;


    alert ("El resultado de la suma es "+ resultado);
	
}
function Promedio () 
{
    var producto1;
    var producto2;
    var producto3;
    var producto1Int;
    var producto2Int;
    var producto3Int;
    var resultado;

    producto1= txtIdPrecioUno.value;
    producto2= txtIdPrecioDos.value;
    producto3= txtIdPrecioTres.value;

    producto1Int= parseInt (producto1);
    producto2Int= parseInt (producto2);
    producto3Int= parseInt (producto3);

    resultado= (producto1Int+producto2Int+producto3Int)/3;

    alert ("El promedio de los 3 productos es "+ resultado);

}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;
    var producto1Int;
    var producto2Int;
    var producto3Int;
    var Iva = 21/100;
    var resultado;
    var resultadoIva;

    producto1= txtIdPrecioUno.value;
    producto2= txtIdPrecioDos.value;
    producto3= txtIdPrecioTres.value;

    producto1Int= parseInt (producto1);
    producto2Int= parseInt (producto2);
    producto3Int= parseInt (producto3);

    resultado= (producto1Int+producto2Int+producto3Int)*Iva;
    resultadoIva= producto1Int+producto2Int+producto3Int+resultado;

    alert ("El precio final es " +resultadoIva);
}