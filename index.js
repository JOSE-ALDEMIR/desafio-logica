let nome = "Aldemir"
let quantidadeDeExperiência = 10500
let nivel


for(let nivel = 1; nivel <= quantidadeDeExperiência; nivel++ ){
   
}
if(quantidadeDeExperiência <= 1000){
nivel = "ferro"
}

if(quantidadeDeExperiência >= 1001){
nivel = "bronze"
}
if(quantidadeDeExperiência >= 2001){
nivel = "prata"
}
if(quantidadeDeExperiência >= 5001){
nivel = "ouro"
}
if(quantidadeDeExperiência >= 7001){
nivel = "platina"
}
if(quantidadeDeExperiência >= 8001){
nivel = "ascendente"
}
if(quantidadeDeExperiência >= 9001){
nivel = "imortal"
}
if(quantidadeDeExperiência >= 10001){
nivel = "radiante"
}


console.log("O Herói de nome " + nome + " ,está no nível de " + nivel)