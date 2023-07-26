/**
 * La función getNameLength(name) toma un nombre (parámetro name) y devuelve una secuencia,
 *  que especifica su longitud. Complemente la secuencia del patrón en la variable message. 
 * con la longitud de la secuencia del parámetro name.

Declare la función getNameLength(name)
Al llamar a la función getNameLength("Poly") devuelve "Name Poly is 4 characters long"
Al llamar a la función getNameLength("Harambe") devuelve "Name Harambe is 6 characters long"
Al llamar a la función getNameLength("Billy") devuelve "Name Billy is 5 characters long"
Al llamar a la función getNameLength("Joe") devuelve "Name Joe is 3 characters long"
 */
const getNameLength = name => {
    const longitud = name.length;
    const nombre = `Name ${name} is ${longitud}`;

    return nombre;
}

console.log(getNameLength('Poly'));
console.log(getNameLength("Harambe"));
console.log(getNameLength('billy'));
console.log(getNameLength('joe'));