 <!--
title:Compra venta de moneda extrangera en Argentina.
author: Gustavo David Ferreyra
email: brakdag+github@gmail.com
date: 24/10/2018
-->

# Introducción.

Las variables: tipo de cambio y comisiones,_spread_ se modifican en el tiempo,
Los bancos igualan la situación de compra con la venta, pero en otros mercados no es igual.
¿Comprar moneda extranjera a través de la bolsa, o vender?
Sólo a partir de un determinado valor, se mejoran las comisiones en los agentes, y no en los bancos. 
Analizaremos Banco Nación vs InvertirOnline.

# Compra de Dolares.

## En Banco Nación.

|23/10/2018	|Compra|	Venta|
|--|--|--|
|Dolar U.S.A|	35,7000	|37,5000|

Siempre que compramos compramos a la contización de venta, o sea si tenemos 10000$ podremos comprar 266.66 USD
Siempre vendemos a la contización de compra 1000USD * 35.7 = 3570$.

## En Agente de bolsa.-

### Comisiones por Operacion

50+IVA + 0.0001+IVA

Montos superiores del mánimo de comisión.

Pesos* 0.0071 *1.21= pesos*0.008591

Para montos inveriores a 7040$ las comisiones comienzan a incrementar.


### Compra de Moneda Extranjera.-

#### Transferencia de dinero en pesos.-

  Gratis. No hay mucho que analizar, quizá dependiendo del banco nos cobren las transferencias pero en este caso si tenemos el dinero en banco nación no es necesario.

#### Modo de operación.
 
 Se debe buscar un bono que tenga mucha liquidez en el momento, o el que mayor volumen tenga operado en dinero. En las semanas previas. Tratar de evitar si tiene tendencia negativa, más bien tiene que ir en tendencia lateral, en moneda extranjera. El bono en moneda local puede tener fluctuaciones dependientes del tipo de cambio. Por ejemplo.

 * Comprar AY24  3735
 * Vender AY24D  102.1


#### Cantidad de operaciones.
La cantidad de operaciones a pagar comisiones son de 2 operaciones diarias. Compra de AY24 y Venta de AY24D.

#### Extracción.

Para poder sacar la guita hay que pagar 5 USD o sea 200$, o extraer más de 2000USD para que comience a aplicar 0.0025.

#### Simulación
```javascript

var cotAY24=3735;
var cotAY24D=102.1;
var pesos = 10000;
var comision=0.008591;

var total_en_dolares = pesos=>{return {"banco":pesos/37.5,"broker":(((pesos*(1-comision))/cotAY24) *(1-comision)*cotAY24D )-5}}
```
Output Se fue probando con diferentes valores para encontrar el punto de equilibrio.

```bash 
> total_en_dolares(10000)
{ banco: 266.6666666666667, broker: 263.6834091544581 }
> total_en_dolares(100000)
{ banco: 2666.6666666666665, broker: 2681.834091544581 }
// Finalmente encontramos un equilibrio aproximado.
> total_en_dolares(24500)
{ banco: 653.3333333333334, broker: 653.2743524284223 }
```
Claramente es conveniente para quien no desea sacar los dólares, ya que la comisión de
los 5 dólares quita cualquier ganancia en el cambio. O sea, sigue siendo conveniente
operar en el banco. 

#### Conclusiones compra de dólares.

* Solo a partir de 24500$ es conveniente realizar el cambio a través de un agente.

* No es conveniente comprar por montos pequeños en un broker, las comisiones exceden el spread de los bancos.

* No ingresar nunca dinero en dólares a la bolsa, es algo estúpido, ya que si invierte en dólares en el momento de la extracción le van a cobrar un mínimo de 5 dólares o 0.25%. Siempre en pesos, y puede refugiarse en papeles dolarizados. 

### Venta de moneda Extranjera.

#### Transferencia de dólares.

Los dolares probablemente ya los tiene en el banco, entonces transferirlos,es gratis no tiene costo.

#### Operaciones
La cantidad de operaciones nuevamente son 2. La compra de AY24D y la venta de AY24.

#### Extracción
En este caso la extracción de pesos, tiene una comisión mínima de 24.2$ (diez veces menor) y un costo de 0.121%

#### Simulación.
```javascript
var cotAY24=3735;
var cotAY24D=102.1;
var comision=0.008591;
var despues_comision = function(monto){
 if ((monto*0.00121)<20){
      return (monto-20)
    }
    else {return (monto *(1-0.00121))
    }
}

var total_en_pesos = dolares=>{
    return {"banco":dolares*35.7,
    "broker":despues_comision((((dolares*(1-comision))/ cotAY24D) *(1-comision)*cotAY24 ))}
}
```
#### Conclusiones de venta de dolares por la bolsa.

* Sólo a partir de cambiar 78 dólares mejoramos las cotizaciones del banco.
* La comisión se reduce prácticamente a la mitad.
El valor real de la cotización del banco es el punto medio entre el precio de compra y el
precio de venta.

(Precio de compra+precio de venta)/2 = Valor del dolar para el banco.

En este caso sería.

(37.5+35.7)/2 = 36.6


El valor en la bolsa es de.
AY24/AY24D =3735/102.1= 36.581782566111656.

O sea que es más barato, pero, las comisiones de los bancos, para vender dólares son muchas.

Por eso es conveniente vender dolar en el agente de bolsa. Pero para vender dolares, previamente
hay que haberlos comprado. Entonces haber pagado la comisión del banco. No se si es posible depositar
dólares en efectivo en banco nación.

¿Cuánto se reduce el spread de venta?

Para el banco.
    valor medio - valor de compra
 = 36600 - 35700 = 899.99$
para el broker
 = 36600 - 35912 = 688$

Diferencias 899.99-688= 212$ En 1000 USD. 
Mejoramos un 0.57% algo es algo.
