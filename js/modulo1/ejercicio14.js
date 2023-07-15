/**
 * La función isValidPassword(password) Comprueba si las contraseñas guardadas y las 
 * introducidas son iguales y devuelve el resultado - boolean true o false. 
 * La variable SAVED_PASSWORD guarda el valor de una contraseña previamente guardada.
 *  La contraseña introducida en la contraseña se pasa al parámetro password.

Asigna una expresión a la variable isMatch para comprobar si las contraseñas previamente 
introducidas y las guardadas son iguales. El resultado de la expresión de comprobación debe ser true,
 si los valores coinciden, y false, si no lo hacen.

Declare la función isValidPassword(password)
La expresión de verificación usada por el operador ===
Al llamar a isValidPassword("mangodab3st") devuelve false
Al llamar a isValidPassword("kiwirul3z") devuelve false
Al llamar a isValidPassword("jqueryismyjam") devuelve true
 */
function isValidPassword(password) {
    //const SAVED_PASSWORD = "jqueryismyjam";
    const isMatch = ("jqueryismyjam" === password);

    return isMatch;
}

console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));