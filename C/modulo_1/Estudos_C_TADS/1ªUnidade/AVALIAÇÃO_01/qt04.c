#include <stdio.h>
#include <math.h>
/*
Escreva um programa em linguagem C que solicite ao usuário as coordenadas (x, y) de dois pontos no plano cartesiano e 
calcule e exiba a distância de Manhattan entre esses pontos.

O programa deve seguir as seguintes especificações:
1- Solicite ao usuário as coordenadas P1(x1, y1) do primeiro ponto.
2 - Solicite ao usuário as coordenadas P2(x2, y2) do segundo ponto.
3- Calcule a distância de Manhattan entre os pontos usando a função manhattan_distance criada por você na questão.
4- Exiba o resultado da distância de Manhattan.

soma das
fabs clacula diferença e se for negativo mult por -1;
*/
int manhattan_distance(int x1, int y1, int x2, int y2){
	
	return fabs(x1-x2) + fabs(y1-y2);
}

int main(){
	int x1, y1, x2, y2, distancia;
	
	printf("Digite o valor de x1: ");
	scanf("%d", &x1);
	printf("Digite o valor de y1: ");
	scanf("%d", &y1);
	printf("Digite o valor de x2: ");
	scanf("%d", &x2);
	printf("Digite o valor de y2: ");
	scanf("%d", &y2);
	
	distancia = manhattan_distance(x1,y1,x2,y2);
	
	printf("A distancia de Manhattan foi: %d", distancia);
	
}