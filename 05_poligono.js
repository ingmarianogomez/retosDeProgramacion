/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcular_area (lado, h = 0, c= 0){
    if (h==0 && c==0){
        return ("El área de su cuadrado es = " + (lado*lado))
    } else if (h==0 || c==0){
        return ("El área de su rectangulo es = "+ (lado*h));
    } else {
        let area = (((lado + h + c)/2)*(((lado + h + c)/2)-h)*(((lado + h + c)/2)-c)*(((lado + h + c)/2)-lado))**(1/2)
        return ("El área de su triangulo es = ") + area
    }
}

console.log(calcular_area(3));
console.log(calcular_area(3,5));
console.log(calcular_area(5,6,7));
console.log(calcular_area(13,13,10));
console.log(calcular_area(1,1,1));
