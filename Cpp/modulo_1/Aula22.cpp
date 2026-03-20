//Conceito de POO em C++
/*
POO tende a espelhar objetos materiais do mundo fisico
Exemplo: 
cliente(entidade - objeto)
nome do cliente (proriedade ou atributos do objeto cliente)
andar(ação ou evento ou metodo do objeto cliente)
*/

#include <iostream>
#include <string>

using namespace std;

//como definir objeto em C++
class Pessoa{
    //definir propriedades
    //setter dados e getter dados
    // private: (com herança alteraramos)
    protected:
        int id;
        string nome;
        int idade;

    //definindo metodo (prototipos)
    public:
        //definindo um construtor da classe (metodo automatico) (nao tem retorno)
        Pessoa(int _id, string _nome, int _idade);
        //definindo um destrutor
        ~Pessoa();

        //definindo metodos set e get da classe
        void setId(int _id);
        int getId();

        void setNome(string _nome);
        string getNome();

        void setIdade(int _idade);
        int getIdade();
};

//implementaçao do construtor (serve com default)
Pessoa::Pessoa(int _id, string _nome, int _idade){
    id = _id;
    nome = _nome;
    idade = _idade;
}
//implementando o destrutor da classe
Pessoa::~Pessoa(){
    cout << "Classe destruida";
}

//implementação de metodos da classe = Pessoas

void Pessoa::setId( int _id){
        id = _id;
}
int Pessoa::getId(){
    // cout << id;
    return id;
}

void Pessoa::setNome( string _nome){
        nome = _nome;
}
string Pessoa::getNome(){
    // cout << nome;
    return nome;
}

void Pessoa::setIdade( int _idade){
        idade = _idade;
}
int Pessoa::getIdade(){
    // cout << idade;
    return idade;
}

/*HERANÇA*/
//DEFINIR CLASSE FILHA
// class Cliente : public Pessoa{
//     private:
//         //definindo um atributo para classe filha
//         int renda;
//     public:
//         //definindo um contrutor da classe filha
//         Cliente(string _nome, int _idade, int _renda);
// };

// //implementando metodos da classe filha
// Cliente::Cliente(string _nome, int _idade, int _renda):Pessoa( _nome, _idade){
//     renda = _renda;
// }

int main(){
    //a classe se torna um tipo de dado e instancia um objeto
    //declarar e inicializar para o constutor
    // Pessoa amigo;
    Pessoa amigo = Pessoa(1, "Joana", 34);
    Pessoa amigo1 = Pessoa(2, "Rozendo", 53);

    cout << "ID do Amigo: " << amigo.getId() << endl;
    cout << "Nome do Amigo: " << amigo.getNome() << endl;
    cout << "Idade do Amigo: " << amigo.getIdade() << endl;


    cout << "ID do Amigo: " << amigo1.getId() << endl;
    cout << "Nome do Amigo: " << amigo1.getNome() << endl;
    cout << "Idade do Amigo: " << amigo1.getIdade() << endl;

    amigo.~Pessoa();

    return 0;
}