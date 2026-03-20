// funçoes em C++ 
/*
linguagem c e c++ é focada(tipado) em funçoes
*/
#include <iostream>
#include <string>

using namespace std;

//funcao definida sem prototipo
int soma(int a, int b){
    return a+b;
}

//prototipo de outra funcao
int mult(int x, int y);

void imprime(string msg);

int main(){

    cout << soma(10, 9) << endl;
    cout << mult(3, 4) << endl;
    
    imprime("Eu sou de Deus!");

    return 0;
}

//funcao com prototipo
int mult(int x, int y){
    return x*y;
}

void imprime(string msg){
    cout << "Frase do dia: "<< msg << endl;
}

