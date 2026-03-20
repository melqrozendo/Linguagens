//passagem de parametro por valor e por referencia
#include <iostream>
#include <string>

using namespace std;

/*****
Em C++ é possivel ter mais uma função com mesmo nome só que com tipagem diferente. (chamada de sobrecarga de função)
*******/

/*
quando passamos um argumento para uma função, estamos passando o valor da variavel e nao a variaavel
*/
//prototipo de passagem por numero
void numero(int num);
//prototipo de passagem por referencia
void vagas(int &);

int main(){

    int num = 8;
    numero(num);

    int pessoas = 5;
    vagas(pessoas);

    //caso solicite o numero depois da passagem de parametro por valor
    cout << "Passagem por valor: " << num << endl;

    //caso solicite o numero depois da passagem de parametro por valor
    cout << "Passagem por referencia: " << pessoas << endl;

    return 0;
}

void numero(int num){
    num++;
    cout << "Numero definido: " << num << endl;
}

void vagas(int &pessoas){
    pessoas+=10;
    cout << "Numero de vagas: " << pessoas << endl;
}