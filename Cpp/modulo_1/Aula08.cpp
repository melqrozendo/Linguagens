// Estrutura LOOP
#include <iostream>

using namespace std;

int main(){

    int n, m;

    for(n=0; n < 10; n++){
        // cout << n << endl;
        cout << n << " . ";
        for(m=0; m < 10; m++){
            cout << m;
        }
        cout << endl;
    }

    return 0;
}