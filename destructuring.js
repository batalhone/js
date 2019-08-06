const pessoa = {
    nome: 'Ricardo',
    idade: 40,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 239
    }
}
const { nome, idade} = pessoa
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa //criacao de alias
console.log(n,i)

