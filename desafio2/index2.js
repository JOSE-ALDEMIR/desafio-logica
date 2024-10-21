let saldo = subtracao(53,2)     //declaração de variavel
main()
function main(){                //declaração função main
    subtracao()
    nivel()
}
function subtracao(vitorias, derrotas){   //declaração função subtração
    let somatorio = vitorias - derrotas
    return somatorio
}
function nivel(){                //declaração função nivel
    for(let nivel = 1; nivel <= saldo; nivel++ ){ //laço for
    
}
if(saldo <= 10){                //estrutura iF
    nivel = "ferro"
}
if(saldo > 10){
    nivel = "bronze"
}
if(saldo > 20){
    nivel = "prata"
}
if(saldo > 50){
    nivel = "ouro"
}
if(saldo > 80){
    nivel = "diamante"
}
if(saldo > 90){
    nivel = "lendario"
}
if(saldo > 100){
    nivel = "imortal"
}
}
console.log("O herói tem de saldo de " + saldo + " nivel: " + nivel)
