/*
Complete el código de la función add para que devuelva el resultado de de los tres parámetros a, b y c.

Declare la función add(a, b, c)
En la función add está el operador return
Al llamar a add(15, 27, 10) devuelve 52
Al llamar a add(10, 20, 30) devuelve 60
Al llamar a add(5, 10, 15) devuelve 30
Al llamar a una función con argumentos aleatorios pero válidos, devuelve el valor correcto
*/
function add(a, b, c) {
    const suma = a + b + c;
    console.log(suma);

    return suma;
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);