/*
Como identificar os tipos de dados:
*/

//Exemplo 1
function mostraNome(){
    console.log("Melq");
}

mostraNome();

//Exemplo 2
function mostraNome1(){
    return 'Rozendo';
}

var recebeNome1 =  mostraNome1();
console.log(recebeNome1);

//Exemplo3 (para exibir na tela se a variavel for uma function)
function mostraNome2(){
    return 'Melquisia';
}

var recebeNome2 = mostraNome2();

var test = (typeof mostraNome2);
console.log(test);

//teste de funcionalidade - tipo1

if(test === 'function'){
    console.log(recebeNome2 + " teste do tipo 1");
}else{
    console.log('Não é uma function!');
}

//teste de funcionalidade - tipo2
//verifica se o objeto é uma instancia do metodo construtor
if(mostraNome2 instanceof Function){
    var nome = mostraNome2();
}

console.log(nome + " teste do tipo 2");

//Exemplo4 (para exibir na tela se a variavel for uma Array)
var MarcaCarros = ['Ford', 'Renault', 'Chevrolet'];

//teste de funcionalidade - tipo2
//verifica se o Array é uma instancia do metodo construtor
if(MarcaCarros instanceof Array){
    console.log(MarcaCarros);
}

//ou (metodo mais usual)
if(Array.isArray(MarcaCarros)){
    console.log(MarcaCarros);
}



