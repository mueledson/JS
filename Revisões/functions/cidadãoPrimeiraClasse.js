// Função em JS é First-Class Object (Citizens)
// Higher-Order function

// Criar de Forma Literal
function fun1() {}

// Armazenar em um VARIÁVEL
const fun2 = function () {}

// Armazenar em um ARRAY
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um Atributo de Objeto
const obj = {}
obj.falar = function () { return "Olar" }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

//Uma Função pode retornar ou conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 6)(2)
const cincoMais = soma(2, 3)
cincoMais(1)