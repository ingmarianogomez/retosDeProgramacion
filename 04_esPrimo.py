# 
#  Escribe un programa que se encargue de comprobar si un número es o no primo.
#  Hecho esto, imprime los números primos entre 1 y 100.
#  

def es_primo (numero: int):
    if numero == 2:
        return True
    for x in range (2, numero):
            if (numero%x) == 0:
                return False
    else:
        return True

print(es_primo(6))
print(es_primo(3))
print(es_primo(9))
print(es_primo(7))

def listado (numero:int):
    listado=[]
    for x in range (2, numero+1):
        if es_primo(x):
            listado.append(x)
    return listado

print (listado(100))
print (len(listado(100)))
print (len(listado(10000)))

