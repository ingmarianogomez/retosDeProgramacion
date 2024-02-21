# /*
#  * Escribe una función que reciba dos palabras (String) y retorne
#  * verdadero o falso (Bool) según sean o no anagramas.
#  * - Un Anagrama consiste en formar una palabra reordenando TODAS
#  *   las letras de otra palabra inicial.
#  * - NO hace falta comprobar que ambas palabras existan.
#  * - Dos palabras exactamente iguales no son anagrama.
#  */

def is_anagrama(palabra1:str, palabra2:str):
  palabra_uno = sorted(palabra1)
  palabra_dos = sorted(palabra2)
  print(palabra_uno == palabra_dos)

def is_anagrama_case_sensitive(palabra1:str, palabra2:str):
  palabra_uno = sorted(palabra1.lower())
  palabra_dos = sorted(palabra2.lower())
  print(palabra_uno == palabra_dos)  

is_anagrama_case_sensitive("amor", "Roma")
