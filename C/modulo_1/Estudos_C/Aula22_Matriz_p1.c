#include <stdio.h>
/*
Matriz: Arrays multidimensionais/conjunto de vetores

1-podem ter varia dimensoes
2-dois ou mais indices para acesso a posições

Sintaxe:
<tipo> <nome> [<dim1>][<dim2>]...[<dimN>];

Acesso a posição:
<nome> [<i1>] [<i2>]...

Inicializacao:
<declaração> = {{<i1>}, {<i2>}, {<i3>}, ...}

*/

int main(){
    int mat[3][3];//declarei uma matriz

    //inicializar uma matriz
    mat[0][0] = 1;
    mat[0][1] = 2;
    mat[0][2] = 3;

    mat[1][0] = 4;
    mat[1][1] = 5;
    mat[1][2] = 6;

    mat[2][0] = 7;
    mat[2][1] = 8;
    mat[2][2] = 9;

    printf("Imprimindo a primeira linha:\n");
    printf("%d %d %d\n", mat[0][0], mat[0][1], mat[0][2]);

    return 0;
}