import random

# Tu lista de elementos
lista_elementos = ["A", "B", "C", "D", "E"]

# Barajamos la lista aleatoriamente
random.shuffle(lista_elementos)

# Creamos un diccionario para asignar números consecutivos a cada elemento
elementos_con_numeros = {}
for indice, elemento in enumerate(lista_elementos, start=1):
    elementos_con_numeros[elemento] = indice

# Imprimimos los elementos y sus números consecutivos
for elemento, numero in elementos_con_numeros.items():
    print(f"Elemento: {elemento}, Número: {numero}")
