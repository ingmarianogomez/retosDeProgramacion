/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial (numero){
    let resultado = 1;
    for (let i=numero; i>1 ; i--){
        resultado = resultado * i;
    }
    return resultado;
}

function factorial_recursivo (numero){
    let resultado_recursivo = 1;
    if (numero == 1){

    }
    else{
        // console.log (numero);
        resultado_recursivo = numero * factorial_recursivo(numero - 1)
    }
    return resultado_recursivo
}


console.log(factorial (4))
console.log(factorial_recursivo (4))

console.log(factorial (6))
console.log(factorial_recursivo (6))

console.log(factorial (8))
console.log(factorial_recursivo (8))