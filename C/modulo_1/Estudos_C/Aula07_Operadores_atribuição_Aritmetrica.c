/*
Operadores de atribuição aritmetica

++ incremeto em 1 unidade
-- decremento em 1 unidade
+= incremento generico
-= decremento generico
*= atribuição com multiplicação
/= atribuição com divisão
*/
#include <stdio.h>

int main (){
	int dados = 5;
	printf("Dado antes do incremento: %d. \n", dados);
	
	dados++;
	printf("incremento em 1 unid: %d \n", dados);
	dados--;
	printf("decremento em 1 unid: %d \n", dados);
	dados+=5;
	printf("incremento em 5 unid: %d \n", dados);
	dados-=3;
	printf("decremento em 3 unid: %d \n", dados);
	dados*=4;
	printf("multiplicado por 4: %d \n", dados);
	dados/=2;
	printf("dividido por 2: %d \n", dados);
}
