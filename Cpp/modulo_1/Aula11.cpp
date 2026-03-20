// Arrays e vetores
#include <iostream>

using namespace std;

//matriz de char é um a string

int main(){
    int v[5] = {1, 2, 3, 4, 5};
    char nome[14] = "Melquisedeque";
    int depp[5];
    int x;

    cout << "O primeiro valor do indice: " << v[0] << endl;

    for(int i = 0; i < 5; i++){
        cout << v[i] << endl;
    }

    for(int i = 0; i<14; i++){
        cout << nome[i];
    }

    //verificando tamanho do array
    x = sizeof(depp);

    cout << "Tamanho do array: " << x << endl;
    cout << "Tamanho do array: " << sizeof( depp ) << endl;

    for(int i = 0; i < x; i++){
        cout << depp[i] << endl;
    }

    return 0;
}