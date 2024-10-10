//Paso por referencia
//Obejots (array) se pasan por referencia
function cambiarValor(parametro){
    parametro[0] = 20
}
let arreglo = [10]
console.log(`Antes funcion: ${arreglo[0]}`)
cambiarValor(arreglo)