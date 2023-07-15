/*
La función calculateTotalPrice cuenta y devuelve el importe total de la compra. 
Toma dos parámetros, valores que se establecerán en el momento de su llamada.

orderedQuantity - el número de los artículos del pedido;
pricePerItem - el precio de los artículos del pedido.
Complete el código de la función para que la variable totalPrice registre el importe total
de la compra, resultado de multiplicar el número de artículos por el precio.

Declare la función calculateTotalPrice (orderedQuantity, pricePerItem)
Al llamar a calculateTotalPrice(5, 100) devuelve 500
Al llamar a calculateTotalPrice(8, 60) devuelve 480
Al llamar a calculateTotalPrice(3, 400) devuelve 1200
Al llamar a calculateTotalPrice(1, 3500) devuelve 3500
Al llamar a calculateTotalPrice(12, 70) devuelve 840
Al llamar a una función con argumentos aleatorios pero válidos, devuelve el valor correcto
*/
function calculateTotalPrice(orderedQuantity, pricePerItem) {
    const total = orderedQuantity * pricePerItem;
    return total;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));