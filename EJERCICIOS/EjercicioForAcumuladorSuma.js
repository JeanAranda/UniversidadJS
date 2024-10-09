//Ejercicio propuesto suma acumalita 
//Sumar los primeros 5 numeros (for)
let maximo = 5, acumuladorSuma = 0;
for(let numero = 1; numero <= maximo; numero++) {
    //Aca se ve lo que se va a sumar
    console.log(`La suma de ${acumuladorSuma}+${numero} es:`)
    //Realizar la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
}
console.log(`La suma de todo lo acumulado es ${acumuladorSuma}`);