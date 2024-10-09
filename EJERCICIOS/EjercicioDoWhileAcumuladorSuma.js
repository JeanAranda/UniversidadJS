let maximo = 5, acumuladorSuma = 0, numero = 1
do {
    console.log(`La suma de ${acumuladorSuma}+${numero} es:`)
    acumuladorSuma += numero
    numero++
    console.log(acumuladorSuma)
} while (numero <= maximo)
    console.log(`La suma de todo es ${acumuladorSuma}`)