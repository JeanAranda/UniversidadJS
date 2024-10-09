let maximo = 5, acumuladorSuma = 0, numero = 1
while (numero <= maximo){
    console.log(`La suma de ${acumuladorSuma}+${numero} es:`)
    acumuladorSuma += numero
    numero++
    console.log(acumuladorSuma)
}