const games = ["Hollow Knight", "Pokémon Omega Ruby", "The Lat of Us", "Resident Evil"]

for (let i in games) {
    const msg = "Games que já zerei: " + games[i];
    console.log(msg)
}

// Melhor Uso Do FOR IN:

const pessoa = {
    nome: 'Ana',
    sobreNome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)    
}