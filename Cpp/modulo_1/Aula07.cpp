// Estrutura condicionais
#include <iostream>

using namespace std;

int main(){

    int num = 5;

    switch(num){
        case 1: 
            cout << "Number 1";
        break;
        case 3: 
            cout << "Number 3";
        break;
        case 5: 
            cout << "Number 5";
        break;
        default:
            cout << "O numero deu Erro!";
        break;
    }

    return 0;
}