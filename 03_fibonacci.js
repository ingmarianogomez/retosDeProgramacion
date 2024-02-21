/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

console.log("Fibonacci");

function fibonacci (num){
    let result = [0,1]
    if (num>2){
        for (let i=2; i<num;i++){
            let cuenta = result[i-1] + result[i-2];
            result.push(cuenta);
        }
    }
    console.log(result);
}

fibonacci (2);
fibonacci (5);
fibonacci (12);
fibonacci (50);