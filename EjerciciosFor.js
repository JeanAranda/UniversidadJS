//Imprimir los primeros 10 numeros de 3 en 3
//Ejemplo 1 - 4 - 7 - 10
let maximo = 10, minimo = -10;
console.log("Incrementos de 3 en 3");
for(let numero = 1; numero <= maximo; numero+=3) {
    console.log(numero);
}
//Decrementando
for(let numero = 1; numero >= minimo; numero-=3){
    console.log(numero);
}