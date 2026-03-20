/*
Operadores Logicos:
-usados para realizar operações para que seja retornado um true ou false
-determinando então o fluxo da aplicação

&&(AND) - se as duas expressoes for verdadeira
||(OR) - caso apenas umas das expressoes for verdadeiro e retorna false apenas quando as duas expressoes forem falsas
! (NOT) - usado para mudar o valor que a expressao retornou, se recebeu true vira false e vice e versa.

*/
/*************************AND******************/
var idade = 16;
var nome = "Melq";

if(nome == "Melq" && idade == 16){
    console.log("Realizou a Matricula do curso!");
}else{
    console.log("Não Realizou a Matricula!");
}

var num1 = 3;
var num2 = 5;

if((num1>1 && num1<5) && true){//true
    console.log("o 1o numero foi: " + num1);
}
else if((num2 > 3 && num2 < 5) && true){//false
    console.log("O 2o numero foi: " + num2);
}

/*************************OR******************/
if(idade > 15 || nome == "Joana"){//true
    console.log("O aluno pode entrar na sala");
}
if(idade > 16 || nome == "Pedro"){//false
    console.log("O aluno nao chegou ainda");
}
if((idade < 18 && nome == "Melq") || 10==10){//true or true =  true
    console.log("Entrada permitida!");
}
if((idade < 18 && nome == "Joana") || 10==12){//false or false =  false
    console.log("Entrada nao permitida!");
}

/*************************NOT******************/
if(!true){//false
    console.log("Casa esta em reforma!");
}
if(!false){//true
    console.log("Casa esta em reforma!");
}
if(!(idade > 14)){//false
    console.log("Não permitido a entrada de menores de -18");
}
if(!(idade < 14)){//true
    console.log("Não permitido a entrada de menores de -18");
}