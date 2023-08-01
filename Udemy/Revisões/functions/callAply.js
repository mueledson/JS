function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preço * (1 - this.desc) * (1 + imposto)}`
}

const Produto = {
    nome    : 'Notebook',
    preço   : 4589,
    desc    : 0.15,
    getPreco
}

global.preço = 20
global.desc = 0.1
console.log(getPreco())
console.log(Produto.getPreco())

const carro = {preço: 49990, desc: 0.20}

console.log(getPreco.call (carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call (carro, 0.17, '$'))
console.log(getPreco.apply(global, [ 0.17, '$']))