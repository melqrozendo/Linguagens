// funcao recursiva em C++
#include <iostream>

using namespace std;

//prototipo da funcao recursiva
int fatorial (int n);

int main(){

    int n = 4;

    cout << "Fatorial de " << n << endl;
    cout << fatorial(n);

}

//funcao
int fatorial (int n){
    if(n < 2){
        return 1;
    }else{
        return fatorial(n-1)*n;
    }
}