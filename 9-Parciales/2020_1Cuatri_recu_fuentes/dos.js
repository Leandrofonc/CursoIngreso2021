function mostrar()

/**Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
 <br> Tipo validad("arena";"cal";"cemento") 
<br> Cantidad de bolsas,
<br> Precio por bolsa (más de cero ),
<br> 
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro */
{
 var producto;
 var cantBolsas;
 var precioBolsa;
 var desc10=0.10;
 var desc25=0.25;
 var precioTotal;
 var precioDesc;
 var contadorBolsas=0;
 var totalBolsas;
 var continuar="si";
 var acumuladorArena=0;
 var acumuladorCal=0;
 var acumuladorCemento=0;
 var contadorArena=0;
 var contadorCal=0;
 var contadorCemento=0;

 
 while (continuar =="si")
 {
    producto = prompt ("ingrese el tipo de bolsa que desea comprar (arena, cal, cemento)");
 while (producto !="arena" && producto !="cal" && producto !="cemento")
  {
    producto= prompt ("hubo un error, ingrese el dato correcto");
  }
  cantBolsas = prompt ("ingrese cuantas bolsas desea comprar");
  cantBolsas = parseInt( cantBolsas);
  while (isNaN(cantBolsas))
  {
  cantBolsas = prompt ("hubo un error, ingrese el dato correcto");
  }
  precioBolsa = prompt ("ingrese el precio de la bolsa(Mas de cero)");
  precioBolsa = parseInt (precioBolsa);
  while ( isNaN(precioBolsa) || precioBolsa< 1 )
  {
    precioBolsa = prompt ("hubo un error, ingrese el dato correcto");
    precioBolsa = parseInt (precioBolsa);
  }
  continuar =prompt ("desea continuar? (si/no)")

  precioTotal= cantBolsas*precioBolsa
 }
 if (cantBolsas>=10 && cantBolsas<30)
  precio
 switch (producto) 
 {
  case "arena":
    acumuladorArena += cantBolsas;
    contadorArena++;
    break;
  case "cal":
    acumuladorCal += cantBolsas;
    contadorCal++;
    break;
  case "cemento":
    acumuladorCemento+= cantBolsas;
    contadorCemento++
    break;
 }
    


}