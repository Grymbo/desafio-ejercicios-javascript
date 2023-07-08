/*
Declare la variable message y escriba en ella un mensaje sobre la compra, la secuencia con el formato: message <nombre del artículo>, price per item is <precio del artículo> credits". Donde <nombre del artículo>yprecio del artículo>son los valores de las variablesproductNameypricePerItem`. Use la sintaxis de la secuencia de las plantillas.

Declare la variable productName
Declare el valor productName de la secuencia "Droid"
Declare la variable pricePerItem
Declare el valor price del número 3500
Declare la variable message
Declare el valor message de la secuencia "You picked Droid, price per item is 3500 credits"
*/

let productName = "Droid";
let pricePerItem = 3500;
let message;
message = `"Your picked ${productName}, price per item is ${pricePerItem} credits"`;
console.log(message);

const videoGame = "Gears of war 5";
const videoGame1 = "Spiderman 2";
let precioVideoGame1 = 1200;
let precioVideoGame2 = 1500;

let message1;
message1 = `"Compraste ${videoGame} con un costo de ${precioVideoGame1} y ${videoGame1} con un costo de ${precioVideoGame2}
            , serian un total de ${precioVideoGame1 + precioVideoGame2} pesos`

console.log(message1);