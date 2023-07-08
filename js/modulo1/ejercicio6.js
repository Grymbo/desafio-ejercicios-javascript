/*
La tienda de drones de reparación está lista para abrir, sólo falta escribir un script para ordenarlos. 
Declarar variables y asignarles los valores adecuados:

pricePerDroid - el precio de un dron, valor 800
orderedQuantity - el número del pedido de los drones , valor 6
deliveryFee - el costo de la entrega, valor 50
totalPrice - el importe total del pedido a pagar, no se olvide de los gastos de envío
message - el mensaje del estado del pedido en el formato "You ordered droids worth <total price> credits.
Delivery (<delivery fee> credits) is included in total price."

Declare la variable orderedQuantity
Declare el valor orderedQuantity del número 6
Declare la variable pricePerDroid
Declare el valor pricePerDroid del número 800
Declare la variable deliveryFee
Declare el valor deliveryFee del número 50
Declare la variable totalPrice
Declare el valor totalPrice del número 4850
Declare la variable message
Declare el valor message de la secuencia "You ordered droids worth 4850 credits. Delivery (50 credits) 
is included in total price."
*/

let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;

const message = `"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price"`

console.log(message);

let videoGame = 1230;
let videoGame1 = 1365;
let cantidadVideoGame1 = 3;
let cantidadVideoGame2 = 4;
let envioVideogame = 50;
let empaquetamiento =50;
let totalVideogame = ((videoGame * cantidadVideoGame1) + (videoGame1 * cantidadVideoGame2)) + envioVideogame + empaquetamiento;

const mensaje1 = `"Adquiriste ${cantidadVideoGame1} videojuegos con un precio de $${videoGame}
y ${cantidadVideoGame2} con un precio de $${videoGame1} cada uno. Con un total de $${totalVideogame}
el costo del envio ($${envioVideogame}) y del empaquetamiento ($${empaquetamiento}) estan incluidos en el total`

console.log(mensaje1);