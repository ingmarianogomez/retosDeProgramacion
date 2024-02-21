/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */


function carrera (accion, pista){
    let pistarini = pista
    for (let i=0; i<accion.length; i++){
        if(accion[i] == "run"){
            if(pista[i] =="_"){
                // console.log ("vamos bien")
            } else if ((pista[i] =="|")){
                pistarini[i] = "/"
            }
        } else if(accion[i] == "jump"){
            if(pista[i] =="|"){
                // console.log ("vamos bien")
            } else if ((pista[i] =="_")){
                pistarini[i] = "x"
            }
        }
    }
    console.log (pistarini)
    for (let i=0; i<accion.length; i++){
        if(pistarini[i] == "/" || pista[i] == "x"){
            return false
        }   
    }
    return true;
}

let accion = ["run","jump","run","jump"]
let pista = ["_","|","_","|"]
let pista2 = ["_","_","|","|"]

console.log(carrera(accion, pista));
console.log(carrera(accion, pista2));
