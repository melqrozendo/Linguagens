/*
Criando Objetos:
-criar proriedade de um objeto
-criar metodos(functions) de um objeto
*/

let pessoa = {
    //criando propriedades
    nome: "Melq",
    idade: 24,
    //criando metodos
    falar: function(){
        console.log("Ola, Bom dia!");
    },
    andar: function(){
        var andando = false;
        if(andando == true){
            console.log("Vire a direita!");
        }else{
            console.log("Vire a esquerda!");
        }
    },
    passos: function(px,py,pz){
        km = px + py + pz;
        return km; 
    }
};
//objeto 'pessoa' chama a prorpiedade 'nome' e 'idade'
console.log(pessoa.nome);
console.log(pessoa.idade);

//objeto 'pessoa' chama o metodo 'falar' e 'andar'
pessoa.falar();
pessoa.andar();

//objeto 'pessoa' chamou o metodo com paramentro e retorno
let km_andados = pessoa.passos(5,6,7);
console.log(km_andados);