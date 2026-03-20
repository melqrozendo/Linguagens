/*
Estruturas de Decisão

Comando if
Operadores lógicos e condições complexas:
1-Conjunção: && (é vardade quando tudo for verdade)
2-Disjunção: || (é verdade se ao menos 1 for verdade)
3-Negação (operador unario): ! (é verdade quando o operando é falso)

*/
#include <stdio.h>

int main(){
	float m;
	
	printf("Insira a nota:\n");
	scanf("%f", &m);
	
	if(m >= 4.0 && m < 7.0){
		printf("Tem direito a exame!\n");
	}
}
