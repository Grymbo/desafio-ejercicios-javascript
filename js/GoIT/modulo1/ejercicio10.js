/*
La función `makeMessage(name, price)` сrea y devuelve un mensaje de compra. Declara dos parámetros, 
valores que se establecerán en el momento de su llamada.
name - nombre del producto
price - precio del producto
Completar el código de la función para que la secuencia se escriba en la variable message 
"You picked <product name>, price per item is <product price> credits", donde <product name> y 
<product price> son los valores de los parámetros name y price. Use la sintaxis de la secuencia de 
las plantillas.

Atención
Observe que no hay llamadas a la funciónmakeMessage. A partir de esta tarea, llamaremos a sus 
funciones y comprobaremos cómo funcionan. Verá los resultados de nuestras comprobaciones en el 
bloque Resultados debajo del editor de código.

Declare la función makeMessage(name, price)
Al llamar a makeMessage('Radar', 6150) devuelve "You picked Radar, price per item is 6150 credits"
Al llamar a makeMessage('Scanner', 3500) devuelve "You picked Scanner, price per item is 3500 credits"
Al llamar a makeMessage('Reactor', 8000) devuelve "You picked Reactor, price per item is 8000 credits"
Al llamar a makeMessage('Engine', 4070) devuelve "You picked Engine, price per item is 4070 credits"
*/
function makeMessage(name, price) {
    const message = `"You picked ${name}, price per item is ${price} credits"`;
    return message;
}
console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));