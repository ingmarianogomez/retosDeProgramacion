/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function fecha_a_entero (fecha){
    let diasanos = (fecha.slice(-4))*365
    let diasmes = (fecha.slice(3,5))*30
    let diasdias = (fecha.slice(0,2))*1
    let entero = diasanos + diasmes + diasdias
    return entero
}

function diferenciaDeDias (fecha1,fecha2){
    try {
        let difFechas = (fecha_a_entero(fecha1))-(fecha_a_entero(fecha2));
        if (difFechas >= 0){
            return difFechas
        } else {
            return -difFechas
        }
    }  
    catch(error){
        console.log("Formato no valido")
    }
        
}

console.log((diferenciaDeDias("10/01/1987","01/01/1921")))
console.log((diferenciaDeDias("12/01/1987","12/01/1990")))
console.log((diferenciaDeDias("10/01/1987","perro")))