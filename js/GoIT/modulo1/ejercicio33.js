/**
 * La función formatMessage(message, maxLength) acepta una secuencia (parámetro message) y
 *  se la formatea si su longitud supera el valor del parámetro maxLength.

Complete el código de la función, si es que la longitud de la secuencia:

es menor que maxLength, la función lo regresa tal cual.
si es mayor que maxLength, la función acorta la secuencia a los símbolos de maxLength
 y añaden un punto ternario "..." al final y devuelven la versión abreviada.
Declare la función formatMessage(message, maxLength)
Al llamar a la función formatMessage("Curabitur ligula sapien", 16) devuelve "Curabitur ligula..."
Al llamar a la función formatMessage("Curabitur ligula sapien", 23) devuelve "Curabitur ligula sapien"
Al llamar a la función formatMessage("Vestibulum facilisis purus nec", 20) devuelve "Vestibulum facilisis..."
Al llamar a la función formatMessage("Vestibulum facilisis purus nec", 30) devuelve "Vestibulum facilisis purus nec"
Al llamar a la función formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) devuelve "Nunc sed turpis..."
Al llamar a la función formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) devuelve "Nunc sed turpis a felis in nunc fringilla"
 */
const formatMessage = (message, maxLength) => {
    const maximo = message.length;
    if(maximo <= maxLength){
        return message;
    } else {
        return message.slice(0, maxLength) + "...";
    }
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));