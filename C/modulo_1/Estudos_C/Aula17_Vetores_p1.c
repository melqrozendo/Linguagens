#include <stdio.h>
/*
Vetores/Arrays: forma de armazenar dados mais complexa
1-Memoria do computador
2-Manipulando vetores via codigo fonte
3-Entrada e saída com vetores

vetores são estruturas de dados unidimensional (aglomerado de variaveis simples)
vetores possui indice que controla as posições

Sintaxe:
<tipo> <nome> [<tamanho>];

Veja: 
Uma variavel do tipo inteiro ocupa 32bits = 4byte
=> dado que: 1 byte = 8bits
Assim um vetor de 3 posições => int vetor[3] = {10,11,12}
32*3bits = 96bits na memoria
vetor[0] = 10;
vetor[1] = 11;
vetor[2] = 12;
Ao declarar um vetor podemos fazer uma lista de inicialização (adicionar elementos).
*/
int main(){
    int v[5] = {5,6,7,8,9};
    float m;

    m = (v[0] + v[1] + v[2] + v[3] + v[4]) / 5;

    printf("Resultado: %.2f\n", m);

    return 0; 
}