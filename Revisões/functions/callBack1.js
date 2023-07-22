const desenvs = ["Capcom", "Nintendo", "Team Cherry"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

desenvs.forEach(imprimir)
desenvs.forEach(desenvs => console.log(desenvs))