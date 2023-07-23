// Criação de promessa

const myPromise = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if (nome === "Matheus") {
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('O usuário Matheus não foi encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if (nome === "Matheus") {
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('O usuário Matheus não foi encontrado!')
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if (nome === "Matheus") {
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('O usuário Matheus não foi encontrado!')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log('Aconteceu um erro: ' + err)
    })

//Resolver várias promessas

setTimeout(resolve => {
    resolve('P1 ok! Timeout')
}, 2000)

    const p1 = new Promise((resolve) => {
    resolve('P1 ok!')
})

const p2 = new Promise((resolve) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// Fetch request na API do Github
// Fetch API

const userName = 'Mueledson'

fetch(`https://api.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.git.v3+json',
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(`O nome do usuário é: ${data.name}`)
    })
    .catch((err) => {
        console.log(`Houve algum erro: ${err}`)
    })