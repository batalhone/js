//negacao logica !qualquercoisa

// || operador ou , apenas um pipe significa comparacao bit a bit
// && operador logico E

// operador OU excusivo ^

function compras(trabalho1, trabalho2){
    const comprarsorvete = trabalho1 || trabalho2
    const comprartv50 = trabalho1 && trabalho2
    const comprartv32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarsorvete
    return{comprarsorvete, comprartv50, comprartv32, mantersaudavel}
}
console.log(compras(true, true))