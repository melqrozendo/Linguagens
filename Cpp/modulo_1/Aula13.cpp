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
    clientes meu_cliente2[10];
    //inicializando
    // meu_cliente = {1, "Melq", 24, 1200};
    // meu_cliente1 = {2, "Joana", 54, 3500};

    //entrada de dados 
    cout << "Digite o Id do Cliente: ";
    cin >> meu_cliente2[0].client_id;
    cout << "Digite o nome do Cliente: ";
    cin >> meu_cliente2[0].nome;
    cout << "Digite a idade do Cliente: ";
    cin >> meu_cliente2[0].idade;
    cout << "Digite a renda mensal do Cliente: ";
    cin >> meu_cliente2[0].salario;

    cout << "Id do Cliente: " << meu_cliente2[0].client_id << endl;
    cout << "Nome do Cliente: " << meu_cliente2[0].nome << endl;
    cout << "Idade do Cliente: " << meu_cliente2[0].idade << endl;
    cout << "Renda Mensal do Cliente: " << meu_cliente2[0].salario << endl;

    return 0;

}