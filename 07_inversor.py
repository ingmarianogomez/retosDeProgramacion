####
#   Crea un programa que invierta el orden de una cadena de texto
#   sin usar funciones propias del lenguaje que lo hagan de forma automática.
#   - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
####


def inversor(cadena:str):
    result = ""
    for x in cadena:
        result = x + result
    print(result)

inversor ("Hola mundo!")
inversor ("Estos son todos los retos de programacion") 