//                                Foreach

//O foreach é um só que de forma simplificada, o foreach também é usado para colocar atributos no array como se tivesse colocando nomes para o indice e os valores no caso do array

//Exemplo Simples

    let pessoas = ['Joao', 'Maria', 'Jose']

    pessoas.forEach((valorAtual, indice, arrayCompleto) => {
        console.log(valorAtual, indice, arrayCompleto)
    })

//Exemplo com Foreach Array de Objeto

    let produtos = [
        {
            nome: 'PS4',
            valor: 5.000,
            desconto: 0.30
        },
        {
            nome: 'Nintendo 3ds Acqua',
            valor: 480.00,
            desconto: 0.50
        }
    ]

    produtos.forEach((produtoAtual) => {
        console.log(produtoAtual.nome)
    })

// www.youtube.com/watch?v=Q3tiAEvWhOE