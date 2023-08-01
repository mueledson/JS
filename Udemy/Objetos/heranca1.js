const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj(){}
console.log(typeof Object, typeof MeuObj.prototype)

/* NÃO ESQUEÇA __PROTO__ e .PROTOTYPE SÃO DIFERENTES */