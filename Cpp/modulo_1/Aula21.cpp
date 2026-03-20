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
    private:
        int id;
        string nome;
        int idade;

    //definindo metodo (prototipos)
    public:
        //definindo um construtor da classe (metodo automatico)
        void setId(int _id);
        int getId();

        void setNome(string _nome);
        string getNome();

        void setIdade(int _idade);
        int getIdade();
};

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

int main(){
    //a classe se torna um tipo de dado
    //declarar e inicializar
    Pessoa amigo;

    amigo.setId(1);
    cout << "ID do Amigo: " << amigo.getId() << endl;

    amigo.setNome("Rozendo");
    cout << "Nome do Amigo: " << amigo.getNome() << endl;

    amigo.setIdade(27);
    cout << "Idade do Amigo: " << amigo.getIdade() << endl;


    return 0;
}