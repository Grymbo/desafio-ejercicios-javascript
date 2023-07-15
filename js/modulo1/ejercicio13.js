/**
 * La función isAdult declara un único parámetro age (edad), valor que se establecerá en el
 *  momento de su llamada. Asigna una expresión a la variable passed para comprobar la edad del 
 * usuario como adulto. Una persona se considera adulta a partir de los 18 años.

Declare la función isAdult(age)
La expresión de verificación usada por el operador >=
Al llamar a isAdult(20) devuelve true
Al llamar a isAdult(14) devuelve false
Al llamar a isAdult(8) devuelve false
Al llamar a isAdult(37) devuelve true
 */
function isAdult(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));