// Ponteiros em C++
/*
tipo de dado em que aponta para a posição de memoria
Alocação de memoria
tipos de memoria
heap - armazenamento de dados abstratos
stack - armazenamento LIFO
com ponteiro, conseguimos acessar a memoria heap
*/
#include <iostream>

using namespace std;

int main(){

    int a = 5;
    int *pointer;

    pointer = &a;

    cout << "Valor da variavel: " << a << endl;
    cout << "Posicao de memoria da variavel: " << &a << endl;

    cout << "Ponteiro de 'a': " << pointer << endl;
    cout << "Valor da variavel atraves do ponteiro: " << *pointer << endl;

    return 0;
}