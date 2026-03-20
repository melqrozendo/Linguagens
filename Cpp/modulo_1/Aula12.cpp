// Structe em C++
/*tipo de dado que reune tipo de dados em uma unica estrutura */

#include <iostream>
#include <string>

using namespace std;

//definindo structe
struct clientes {
    int client_id;
    // char nome[30],
    string nome;
    int idade;
    float salario;
};

int main(){

    //renomeando struct definido (instanciado)
    clientes meu_cliente, meu_cliente1;
    //inicializando
    meu_cliente = {1, "Melq", 24, 1200};
    meu_cliente1 = {2, "Joana", 54, 3500};

    cout << "Id do Cliente: " << meu_cliente.client_id << endl;
    cout << "Nome do Cliente: " << meu_cliente.nome << endl;
    cout << "Idade do Cliente: " << meu_cliente.idade << endl;
    cout << "Renda Mensal do Cliente: " << meu_cliente.salario << endl;

    cout << "Id do Cliente: " << meu_cliente1.client_id << endl;
    cout << "Nome do Cliente: " << meu_cliente1.nome << endl;
    cout << "Idade do Cliente: " << meu_cliente1.idade << endl;
    cout << "Renda Mensal do Cliente: " << meu_cliente1.salario << endl;

    return 0;

}