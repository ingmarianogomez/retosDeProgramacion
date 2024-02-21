/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */


function toBinary (numeroDec){
    let binario = "";
    let numero = numeroDec;
    let resto;
    while (numero>1){
        resto = numero%2;
        numero =  (numero - resto)/2;
        binario = resto + binario;
    }
    binario = "1" + binario;
    console.log(binario);
}

 toBinary(12);
 toBinary(5);
 toBinary(1);
 toBinary(2);
 toBinary(100);
 toBinary(87);


