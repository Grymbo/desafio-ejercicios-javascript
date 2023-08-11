/*
La función makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) genere y
 devuelva un mensaje sobre la compra de drones de reparación. Declara tres parámetos, 
 valores que se establecerán en el momento de su llamada.

orderedQuantity - el número de drones en el pedido
pricePerDroid - el precio por dron
deliveryFee - el costo de la entrega
Complete el código de la función para que devuelva un mensaje de pedido al formato 
"You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included
 in total price.". No se olvide del costo de la entrega al calcular el costo total.

Declare la función makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
Al llamar a makeOrderMessage(2, 100, 50) devuelve "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
Al llamar a makeOrderMessage(4, 300, 100) devuelve "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
Al llamar a makeOrderMessage(10, 70, 200) devuelve "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
*/ 
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
    const message = `"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price"`;

    return message;
}
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(10, 70, 200));