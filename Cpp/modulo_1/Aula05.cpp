// operadores aritmetricos
#include <iostream>

using namespace std;

int main(){
    int a, b;
    int soma, sub, mult;
    float div; //para ver dois valores de float a entrada tem que ser float
    float resto;

    a = 10;
    b = 5;

    soma = a + b;
    sub = a - b;
    mult = a * b;
    div = a / b;

    //como calcular resto da divisão
    resto = a % b;

    cout << "Resultados: " << soma << " - " << sub << " - " << mult << " - " << div << " - " << resto << endl;

    return 0;

}