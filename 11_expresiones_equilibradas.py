# /*
#  * Crea un programa que comprueba si los paréntesis, llaves y corchetes
#  * de una expresión están equilibrados.
#  * - Equilibrado significa que estos delimitadores se abren y cieran
#  *   en orden y de forma correcta.
#  * - Paréntesis, llaves y corchetes son igual de prioritarios.
#  *   No hay uno más importante que otro.
#  * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
#  * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
#  */

def es_equilibrada(exp: str):
    listado = ["A"]
    for x in exp:
        if x == "(" or x == "{" or x == "[":
            listado.append(x)
        elif x == ")" and listado[-1] == "(":
            listado.pop()
        elif x == "}" and listado[-1] == "{":
            listado.pop()
        elif x == "]" and listado[-1] == "[":
            listado.pop()    
    return (listado == ["A"])


print(es_equilibrada("[22{(2387([5]))4}]"))
print(es_equilibrada("[22{(2387([5]))4}"))
print(es_equilibrada("[[[[[lslkd({({[[[{{()}}]]]})})]]]]]"))
print(es_equilibrada("[{[()]}"))