//                       Array Map
// O método Javascript .map() em JavaScript cria um array chamando uma função específica em cada elemento presente no array pai
const vetor = [
    {
        id: 1,
        nome: 'Bicicleta',
        categoria: 1
    },
    {
        id: 1,
        nome: 'Toca de Natação',
        categoria: 2
    }
]

const categorias = {
    1: 'Bicicleta',
    2: 'Natação'
}

const vetor2 = vetor.map(item => {
    item.categoria = categorias[item.categoria]
    return item
})

console.log(vetor2)
//Link do vídeo: https://www.youtube.com/watch?v=Ax101agfFB0