/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparitas;
    var descuento;
    var precioFinal;
    var precio = 35;
    var marcaLampara;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if(cantidadLamparitas>5)
    {
        //Mayor 5
        //aplicar descuento del 50%.
        descuento = 50;

        txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        descuento= 40;
        if(cantidadLamparitas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                //descuento del 40 %
                txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
            }
            else
            { 
                descuento= 30;
                //el otro descuento
                txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
            }
        }
    else
        {
            //Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        if (cantidadLamparitas ==4)
        {
                descuento= 25;
            if (marcaLampara== "ArgentinaLuz" ||marcaLampara== "FelipeLamparas")
            {
                //se aplica descuento 25%
                txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
            }
            
            else
            {
                //descuento 20%
                descuento= 20;
                txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
            }
            }
        else 
            {
         //Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
                if (cantidadLamparitas ==3)
                {
                 descuento= 15
                    if (marcaLampara =="ArgentinaLuz")
                  {
                      txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
                  }


                else 
                    if(marcaLampara =="FelipeLamparas")
                {
                    descuento=10
                    txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
                }
                else 
                {
                    descuento=5
                    txtIdprecioDescuento.value= cantidadLamparitas*precio - (cantidadLamparitas*precio*descuento/100);
                }

                }
            }
            
        }
    }if (txtIdprecioDescuento.value>120)
    {
        IIBB=10;
        totalIIBB= txtIdprecioDescuento.value*IIBB/100;
        

        alert ("Usted pago "+totalIIBB+ " de ingresos brutos");
    }
}
    
