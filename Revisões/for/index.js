let contador = 1
//Comparação While e For
// while (contador <= 10) {
//     console.log(`contador = ${contador}`)
//     contador++
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i = ${i}`)
// }

//Exemplo Prático de For
const games = ["Hollow Knight", "Pokémon Omega Ruby", "The Lat of Us", "Resident Evil"]
for (let i = 0; i < games.length; i++) {
    const msg = "Games que já zerei: " + games[i];
    console.log(msg)
}