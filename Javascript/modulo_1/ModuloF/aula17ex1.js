/*
Objetos em JS:

sintaxe:

let amigo = {nome:'José', sexo: 'M', peso: 85.4, engordar(p){}} 

Veja: a função criada dentro do objeto se torna um metodo.

Veja: array é um onjeto e um objeto é um objeto.
*/
/*codigo 1:
let amigo = []
console.log(typeof amigo)
*/
let amigo = {nome:'José', 
sexo: 'M', 
peso: 85.4, 
engordar(p){
    console.log('Engordou')
    this.peso += p //this = a uma palavra que referencia o objeto

}}
console.log(amigo)//chamando todo conteudo do objeto
console.log(amigo.nome) //chamando o conteudo nome

// passagem de parametro
amigo.engordar(4)
console.log (`${amigo.nome} pesa ${amigo.peso} kg`)