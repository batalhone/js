const valores = [7.7, 8.9, 6.3, 9.2] // vetor array
console.log(valores[0], valores[3])
console.log(valores[4]) //posicao nao existe
valores[4] = 10
console.log(valores[4]) //posicao nao existe
console.log(valores.length) //qtd de arrays
//console.log(valores.pop(3))
delete valores[0]
console.log(valores)