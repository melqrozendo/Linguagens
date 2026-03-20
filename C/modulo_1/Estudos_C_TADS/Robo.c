#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>

#define TAM 10

//Função que indica se o movimento desejado na direção atual vai acabar em colisão
//Se a função retornar 0 entãou haverá um colisão
//O interessante seria retornar 1 que indicaria Colisão = true, mas mudamos o nome da função e antes fazia sentido ser 0. Seria bom mudar isso!
int bater(int direcao, int pos_x, int pos_y, char sala[TAM][TAM]){
    if (direcao==1 && sala[pos_x][pos_y-1]=='*') {
        return 0;
    }
    if (direcao==2 && sala[pos_x][pos_y+1]=='*') {
        return 0;
    }
    if (direcao==3 && sala[pos_x-1][pos_y]=='*') {
        return 0;
    }
    if (direcao==4 && sala[pos_x+1][pos_y]=='*') {
        return 0;
    }
    return 1;
}

//Função que faz o giro de 90 graus na direção do robô
//1 -> Esquerda
//2 -> Direita
//3 -> Cima
//4 -. Baixo
//Essas direções poderiam ser reorganizadas de forma a simplificar esse processo!
int girar(int direcao) {
    if (direcao==1) return 3;
    if (direcao==2) return 4;
    if (direcao==3) return 2;
    if (direcao==4) return 1;
    return 0;
}

int main(){

    int direcao=1;
    char sala[TAM][TAM] = {
        {'*','*','*','*','*','*','*','*','*','*'},
        {'*',' ',' ',' ','*',' ',' ',' ',' ','*'},
        {'*',' ',' ',' ','*',' ',' ',' ',' ','*'},
        {'*',' ',' ',' ',' ',' ',' ','*','*','*'},
        {'*',' ',' ',' ',' ',' ',' ',' ',' ','*'},
        {'*','*','*',' ',' ',' ',' ',' ',' ','*'},
        {'*',' ',' ',' ',' ',' ',' ',' ',' ','*'},
        {'*',' ',' ',' ',' ','*',' ',' ',' ','*'},
        {'*',' ',' ',' ',' ','*',' ',' ',' ','*'},
        {'*','*','*','*','*','*','*','*','*','*'},
    };
    int pos_x=4;
    int pos_y=4;
    int colisao=0;
    int linha;
    int coluna;

    while (1==1) {
        system("clear"); //No windows é system("clear"); e tem como fazer isso de forma automática!
        for(linha=0;linha<TAM;linha++){
            for(coluna=0;coluna<TAM;coluna++){
                //O robô não está inserido na matriz, apenas manipulamos a posição dele. Por isso a impressão dessa forma
                if (linha==pos_x && coluna==pos_y) {
                    //O ideal seria o robo está inserdio na matriz, dessa forma a linha poderia ser impressa como um String em apenas um loop
                    //mas nesse caso teria que apagar o robô da posição anterior para não ficar um rastro do movimento dele na matrix
                    printf("O");
                } else {
                    printf("%c", sala[linha][coluna]);
                }
            }
            printf("\n");
        }

        colisao = bater(direcao, pos_x, pos_y, sala);
        if (colisao==0) {
            direcao = girar(direcao);
        } else {
            //Isso pode ser melhorado também!
            if (direcao==1) {
                pos_y = pos_y-1;
            }
            if (direcao==2) {
                pos_y = pos_y+1;
            }
            if (direcao==3) {
                pos_x = pos_x-1;
            }
            if (direcao==4) {
                pos_x = pos_x+1;
            }            
        }
        sleep(1); //Fazer o programa esperar 1 segundo antes de continuar a execução, isso ajuda a acompanhar as saídas impressas na tela!
    }
}
