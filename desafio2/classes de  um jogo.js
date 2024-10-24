class heroi{
    constructor(nome, idade,tipo, ataque){ //função de atribuição os valores pra dentro da classe
        this.nome = nome //chama e declara a variavel dentro da classe
        this.idade = idade
        this.tipo = 'guerreiro'
        this.ataque
    }
   
    
    atacar(){
        
        
if (this.tipo == 'mago') {
  
   this.ataque = " magia "
}
  if (this.tipo == 'guerreiro') {
   this.ataque = " espada"
 }
  if (this.tipo == 'monge') {
    this.ataque = " artes marciais"
  }
  if (this.tipo == 'ninja') {
    this.ataque = " shuriken"
  }
  console.log("O " + this.tipo + " atacou usando " + this.ataque)
  }

    }

let heroiJoga = new heroi()



heroiJoga.atacar()

