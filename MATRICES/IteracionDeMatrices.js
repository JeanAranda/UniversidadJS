//Matrices en JS
//Declaracion de una matriz
let matriz = [[100, 200, 300],[400, 500, 600]]
//Contar los renglones en la matriz
console.log(matriz.length)
//Numero de columnas
console.log(matriz[0].length)
console.log(matriz[1].length)
//Renglones
for (let ren = 0; ren < matriz.length; ren++){
    //Columnas
    for(let col = 0; col < matriz[ren].length; col++){
        console.log(`Renglon[${ren}] Columna[${col}] ${matriz[ren][col]}`)
    }
}