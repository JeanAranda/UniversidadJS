//Paso por valor en JS
//Pasando informacion de tipo primitivo
function cambiarValor(parametro){
    parametro = 20
}
let argumento = 10
cambiarValor(argumento)
console.log(argumento)
argumento = 30
cambiarValor(argumento)
console.log(argumento)