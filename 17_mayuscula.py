# /*
#  * Crea una función que reciba un String de cualquier tipo y se encargue de
#  * poner en mayúscula la primera letra de cada palabra.
#  * - No se pueden utilizar operaciones del lenguaje que
#  *   lo resuelvan directamente.
#  */

def to_mayus (palabra:str):
    palabravar = palabra
    capital = palabravar[0].upper()          
    palabravar = capital + palabravar[1:len(palabravar)]
    return palabravar

print(to_mayus("juanaco"))
print(to_mayus("pedro"))
print(to_mayus("tosh"))
print(to_mayus("enrique"))