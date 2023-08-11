/**
 * La función getSubstring(cadena, longitud) acepta una secuencia y devuelve una subsecuencia desde 
 * el principio hasta la length de los símbolos. Declare dos parámetros, valores que se establecerán 
 * en el momento de su llamada:

string - secuencia original
length - el número de caracteres desde el principio de la secuencia para la subsecuencia
Asigne una expresión a la variable substring para crear una subsecuencia de longitud length de 
los símbolos (desde el principio) de la secuencia string.

Declare la función getSubstring(string, length)
Al llamar a la función getSubstring("Hello world", 3) devuelve "Hel"
Al llamar a la función getSubstring("Hello world", 6) devuelve "Hello"
Al llamar a la función getSubstring("Hello world", 8) devuelve "Hello wo"
Al llamar a la función getSubstring("Hello world", 11) devuelve "Hello world"
Al llamar a la función getSubstring("Hello world", 0) devuelve ""
 */
const getSubstring = (cadena, longitud) => {
    const substring = cadena.slice(0, longitud);

    return substring;
}
console.log(getSubstring("Hello Word", 3));
console.log(getSubstring("Hello Word", 6));
console.log(getSubstring("Hello Word", 8));
console.log(getSubstring("Hello Word", 11));
console.log(getSubstring("Hello Word", 0));