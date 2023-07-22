/**
 * La función checkIfCanAccessContent(subType) compruebe si el usuario puede acceder al contenido. 
 * La verificación se realiza por tipo de suscripción. Sólo los usuarios con una suscripción pro o 
 * vip pueden acceder a ella.

Asigna una expresión de verificación de la suscripción a la variable canAccessContent. 
Si el valor del parámetro subType es igual a las secuencias "pro" o "vip", el usuario recibirá acceso.
 El resultado de la expresión de verificación será boolean true o false.

Declare la función checkIfCanAccessContent(subType)
La expresión de verificación usada por el operador ||
Al llamar a checkIfCanAccessContent("pro") devuelve true
Al llamar a checkIfCanAccessContent("starter") devuelve false
Al llamar a checkIfCanAccessContent("vip") devuelve true
Al llamar a checkIfCanAccessContent("free") devuelve false
 */
function checkIfCanAccessContent(subType) {
    return subType === 'pro' || subType === 'vip';
}
console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));