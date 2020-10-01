let arr = ['javascript','html','css','mqsl']



const templteLiterals = frase => {
    return `Tryber ${frase} Aqui`
}
console.log(templteLiterals('bebeto'))

function templteLiterals2 (function1) {
    arr.sort()
    return ` ${arr} ${function1}`
}

console.log(templteLiterals2(templteLiterals('bebeto')))