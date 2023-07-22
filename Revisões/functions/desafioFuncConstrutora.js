// Classe
function Pessoa(nome) {
    this.nome = nome

    this.fala = function(){
        console.log(`Meu nome é  ${this.nome}`)
    }
}

const p1 = new Pessoa('Edson')
p1.fala()
console.log(p1.nome)