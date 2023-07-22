const jogo = {
    nome: 'O jogo Hollow Knight,',
    preco: 'O jogo custa ' + 50.00 + ',',
    desenvs: 'Os desenvolvedores do jogo são o grupo: Team Cherry'
}

for (let atributs in jogo) {
    console.log(`${jogo[atributs]}`)
}