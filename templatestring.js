const nome = 'Ricardo'
const concatenacao = 'Olá ' +nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) // expressoes
const up = texto => texto.toUpperCase()

console.log(`Eiiii ${up(`cuidado`)}!`)