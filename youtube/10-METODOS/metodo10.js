const data = [
    {name: 'Matheus', age: 31, sallary: 2000, driverLicense: true},
    {name: 'João'   , age: 18, sallary: 1500, driverLicense: false},
    {name: 'Mariana', age: 22, sallary: 4000, driverLicense: true},
    {name: 'Pedro'  , age: 50, sallary: 7200, driverLicense: true},
    {name: 'Érica'  , age: 16, sallary: 0   , driverLicense: false}
]

// 10 - every
const everyUserHasName = data.every((user) => user.name)

console.log(everyUserHasName);

const everyUserHasGoodSallary = data.every((user) => {
    return user.sallary > 2000
})

console.log(everyUserHasGoodSallary)