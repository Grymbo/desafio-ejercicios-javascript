/*
La función add debe ser capaz de sumar tres números y mostrar el resultado en la consola. 
Añada la función add tres parámetros a, b y c, que obtendrán valores de los argumentos 
cuando se llama.

Complemente console.log() para que registre la secuencia "Addition result equals <result>", 
donde <result> es la suma de los números.

Declare a la función add(a, b, c)
Al llamar a add(15, 27, 10) se mostrará en la consola "Addition result equals 52"
Al llamar a add(10, 20, 30) se mostrará en la consola "Addition result equals 60"
Al llamar a add(5, 10, 15) se mostrará en la consola "Addition result equals 30"
*/
function add(a, b, c) {
    const sumar = a + b + c;
    const resultado = `"Addition result equals ${sumar}`;
    console.log(resultado);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

function videogame(x, y, z) {
    const restaYSuma = (x - y) * z;
    console.log(restaYSuma);
}

videogame(12, 10, 2);