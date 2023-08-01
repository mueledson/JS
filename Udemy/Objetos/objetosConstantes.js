// pessoa -> 123 -> {...}
const pessoa = {nome: 'Dante'}
pessoa.nome = 'Edson'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Pedro'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end  = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)