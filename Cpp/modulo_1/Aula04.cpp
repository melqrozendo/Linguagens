#include <iostream>

using namespace std;

int main(){
    int a, b;
    int c; //criando variavel temporaria

    cout << "Digite o primeiro valor: ";
    cin >> a;

    cout << "Digite o segundo valor: ";
    cin >> b;

    c = a;
    a = b;
    b = c;

    cout << "O valor digitado foi: " << a << " e " << b << " e " << c << endl;

    return 0;
}