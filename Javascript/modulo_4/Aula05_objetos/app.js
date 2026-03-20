/*
Operadores nativos do JS para manipular propriedades dos objetos:

delete
in

Metodos do JS para manipular propriedades dos objetos:

hasOwnProperty(<propriedade>)

Obs> os objetos em JS suas propriedades são enumeraveis ou nao(semelhantes a arrays) para manipular podemos fazer uso do:
for(<prorpiedade> in <objeto>){

}

Object.keys(<objeto>);


*/

//a natureza dos objetos em js é dinamica
var pessoa = {};
//definindo proriedade fora do objeto
pessoa.nome = 'Melq';
pessoa.idade = 24;
pessoa.sexo = 'Masculino';
pessoa.casado = false;
console.log(pessoa);

/*Manipulações e Alteraçoes*/
//Remover proriedade de um objeto: (operador nativo)
delete pessoa.idade;
console.log(pessoa);

//Remover propriedade de um objeto sob condição
if(pessoa.casado){
    delete pessoa.casado;
}
console.log(pessoa);//resultado: falso-negativo

//Para fugir do falso-negativo: 
//(verifique se "casado" esta no objeto)
if("casado" in pessoa){
    delete pessoa.casado;
}
console.log(pessoa);

//metodo para manipular prorpriedade
console.log(pessoa.hasOwnProperty("casado"));//false

//array de proriedade
for(propriedade in pessoa){
    console.log(propriedade);
    console.log(pessoa[propriedade]);//valores das propriedades
}

//propriedades no formato de arrays
var propriedade = Object.keys(pessoa);
console.log(propriedade);

for(i=0, size = propriedade.length; i<size; i++){
    console.log(propriedade[i]);
    console.log(pessoa[propriedade[i]]);
}

//verificar se uma propriedade é enumeravel ou nao
console.log(pessoa.propertyIsEnumerable("lenght"));//false