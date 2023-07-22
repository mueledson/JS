const notas = [7, 7.5, 9.5, 10, 8.5]

// Sem CallBack
let notasBaixas = []
for (let i in notas) {
    if (notas[i] > 7) {
        notasBaixas.push(notas[i])
    }    
}
console.log(notasBaixas)

//Com CallBack
let notasBaixas2 = notas.filter(function(nota){
    return nota > 7
})

console.log(notasBaixas2)

// Com CallBack e Arrow Func
let notasBaixas3 = notas.filter(nota => nota > 7)

console.log(notasBaixas3)

// Com CallBack e + Elegante e Arrow Func
const ValidaMenor7 = nota => nota > 7
let notasBaixas4 = notas.filter(ValidaMenor7)

console.log(notasBaixas4)