const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 4)
imprimirResultado(4, 4, soma)
imprimirResultado(8, 4, function (x, y) {
    return x - y   
})
imprimirResultado(4, 4, (x, y) => x * y)

//Exemplo 2:

const Pessoa = {
    fala: function () {
        console.log("Opa")
    }
}