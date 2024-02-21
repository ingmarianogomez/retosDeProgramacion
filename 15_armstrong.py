# /*
#  * Escribe una función que calcule si un número dado es un número de Armstrong
#  * (o también llamado narcisista).
#  * Si no conoces qué es un número de Armstrong, debes buscar información
#  * al respecto.
#  */

armstrong = 3**3 + 7**3 + 1**3

def is_armstrong (num: int):
    num_a_string = str(num)
    suma = 0
    for x in num_a_string:
        suma = suma + ((int(x))**len(num_a_string))
    print ("numero:",num,"suma:",suma)
    if (suma == num):
        return True
    else:
        return False

print(is_armstrong(2))
print(is_armstrong(9))
print(is_armstrong(15))
print(is_armstrong(152))
print(is_armstrong(153))
print(is_armstrong(370))
print(is_armstrong(371))
print(is_armstrong(375))