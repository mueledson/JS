const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas e 00

const falaDaPessoa = pessoa.falar.bind(pessoa)
falaDaPessoa()