/*
Mixins (construtores de escopo seguro):

Obs: se nao colocar o operador construtor 'new', o sistema retorna undefined, isso ocorre pq o objeto criado vai chamar do escopo global.
e como prevenir isso:
1-verificar se o objeto é instancia da function

*/

/*
//criando construtor
function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo
}
//criando objeto sem esquecer o new
pessoa01 = new Pessoa('Melq', 24, 'M');
//verificar se o objeto é instancia da function
console.log(pessoa01 instanceof Pessoa);
console.log(pessoa01);

*/

function Pessoa (nome, idade, sexo){
    if (this instanceof Pessoa){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo
    } else {
        //estrutura para previnir o esquecer do 'new'
        return new Pessoa(nome, idade, sexo);
    }
}
//criando objeto esquecendo o 'new'
pessoa01 = Pessoa('Melq', 25, 'M');
console.log(pessoa01 instanceof Pessoa);
console.log(pessoa01)