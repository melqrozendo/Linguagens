// Templates de funçoes em C++
/*
criar funçoes
*/
#include <iostream>

using namespace std;

//definindo template de função generica
template <class TIPO>
TIPO mult(TIPO b);

int soma(int a);


int main(){

    cout << mult(4.3) << endl;
    cout << soma(10) << endl;

    return 0;
    
}

template <class TIPO>
TIPO mult(TIPO b){
    //para saber o tipo de dado
    cout << typeid(b).name() << endl;
    return b*5;
}

int soma(int a){
    //para saber o tipo de dado
    cout << typeid(a).name() << endl;
    return a+1;
}