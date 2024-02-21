# /*
#  * Escribe una función que reciba un texto y retorne verdadero o
#  * falso (Boolean) según sean o no palíndromos.
#  * Un Palíndromo es una palabra o expresión que es igual si se lee
#   * de izquierda a derecha que de derecha a izquierda.
#  * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
#  * Ejemplo: Ana lleva al oso la avellana.
#  */

def es_palindromo(texto:str):
    texto = texto.lower()
    texto_limpio = ""
    for x in texto:
        if (x != ' '):
            texto_limpio = texto_limpio + x 
    texto_al_verre = ""
    for x in texto_limpio:
        texto_al_verre = x + texto_al_verre
    return(texto_limpio == texto_al_verre)

print(es_palindromo("araca la cana anac alac a r a"))
print(es_palindromo("anana"))
print(es_palindromo("perro policia"))