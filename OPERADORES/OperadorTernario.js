//Operador ternario
let miNumero = 8;
//Revisar si el número es positivo
(miNumero > 0) ?  console.log(`El numero ${miNumero} es positivo`) : console.log(`El numero ${miNumero} es negativo`);
//Algoritmo mayor de edad
const EDAD_ADULTO = 18;
let edadPersona = 17;
//revisar si la persona es mayor de edad
if (edadPersona >= EDAD_ADULTO){
    console.log(`La persona con edad ${edadPersona} es un adulto`)
}else{
    console.log(`La persona con edad ${edadPersona} es menor`)
}

//Dia de la semana
let diaDeLaSemana = 7;
if (diaDeLaSemana == 1) {
    console.log("Lunes")
}else if (diaDeLaSemana == 2) {
    console.log("Martes")
}else if(diaDeLaSemana == 3){
    console.log("Miercoles")
}else if (diaDeLaSemana == 4) {
    console.log("Jueves")
}else if (diaDeLaSemana == 5) {
    console.log("Viernes")
}else if (diaDeLaSemana == 6) {
    console.log("Sabado")
}else if (diaDeLaSemana == 7) {
    console.log("Domingo")
}else{
    console.log(`Día de la semana erroneo ${diaDeLaSemana}`)
}