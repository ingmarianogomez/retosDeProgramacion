/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 * 
 * FALTA TERMINAR
 */

function contiene(str1, str2){
    let out1=[];
    let out2=[];
    let validador = true;
    for (let i=0; i<str1.length; i++){
        for (let j=0; j<str2.length; j++){
            if (str1[i] == str2[j]){
                out1.push(str1[i]);
                validador = false;
                break
            }
        }
        if (validador){
            out1.push(str1[i]);
            
        }
        validador = true;
    }
    return {out1, out2};
}

console.log(contiene("romance","amor"));
console.log(contiene("mariano","santiago"));
console.log(contiene("arbol","persona"))