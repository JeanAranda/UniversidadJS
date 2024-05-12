//Operadores logicos segun sus reglas
let a = true
let b = false
let c = true
console.log(a)
console.log(b)
console.log(c)
//Operador logico && (and o Y)
//Regresa verdadero si ambos son verdaderos
console.log(`${a} && ${b} --> ${a && b}`)
console.log(`${a} && ${c} --> ${a && c}`)
//Operador logico || (or o O)
//Regresa verdadero si uno de los dos es verdadero
console.log(`${a} || ${b} --> ${a || b}`)
console.log(`${a} || ${c} --> ${a || c}`)
//Operdor Not o Unario (!)
//Invierte el valor original, true --> false, false --> true
console.log(`${a} --> ${!a}`)
console.log(`${b} --> ${!b}`)