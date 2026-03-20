#include <stdio.h>
/*
Escreva um programa em linguagem C que calcule uma aproximação do valor de p utilizando a Série de Leibniz. 
O programa deve solicitar ao usuário a quantidade de termos (n) que deseja utilizar na série e exibir o valor 
aproximado de p obtido.

Dica: Utilize a seguinte fórmula para o cálculo da série:

p/4 = 1/1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + ...

p = (serie)*4;
*/
int main(){
	int n;
	int x = 1;
	float num = 1;
	//float L = 0, L1 = 0, L2 = 0, serie = 0, p = 0;
	float L, L1, L2, serie, p;
	
	printf("Digite a quantidade de termos: ");
	scanf("%d", &n);
	
	while(x <= n){
		if(x == 1){
			
			L = 1;
			serie = L;
			printf("%do Termo: %.2f \n", x, serie);
		}
		else if(x%2 == 0){
			
			L1 = num/(x+1);//
			serie = serie - L1;
			printf("%do Termo: %.2f \n", x, serie);
		}
		else if(x%2 != 0){
			
			L2 = num/(x+2);//
			serie = serie + L2;
			printf("%do Termo: %.2f \n", x, serie);
		}
		x++;
	}
	p = (serie)*4;
	printf("O valor aproximando de p foi: %.2f", p);
	
}
