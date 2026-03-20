#include <stdio.h>

float lernota(int c){//toda função retorna o valor
	float n;
	//int c = 1;
	
	do{
		printf("Digite nota%do: ", c);
		scanf("%f", &n);
		
		if(n<0 || n>10){
			printf("Erro!\n");
		}
	}while(n<0 || n>10);
	
	return n;
}

int main(){
	float n1, n2, n3;
	
	n1 = lernota(1);//função com passagem de parametro
	n2 = lernota(2);
	n3 = lernota(3);
	
	printf("Media: %.2f ", (n1+n2)/3);
	
	return 0;
}
