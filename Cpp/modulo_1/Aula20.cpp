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
    //veja que os atributos sao privados da classe, ou seja, não é possivel acessar de fora, para tornar publico
    //setter dados e getter dados
    public:
        int id;
        string nome;
        int idade;

        //definindo metodo
        void Andar(){
            cout << nome << " foi andar" << endl;
        }
};

int main(){
    //a classe se torna um tipo de dado
    //declarar e inicializar
    Pessoa amigo;

    amigo.id = 1;
    amigo.nome = "Melq";
    amigo.idade = 24;

    amigo.Andar();

    cout << "ID do Amigo: " << amigo.id << endl;
    cout << "Nome do Amigo: " << amigo.nome << endl;
    cout << "Idade do Amigo: " << amigo.idade << endl;

    return 0;
}