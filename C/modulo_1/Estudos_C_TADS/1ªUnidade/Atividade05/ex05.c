#include <stdio.h>
#include <stdlib.h>

void saudacao(){
	printf("Ola, vamos comparar numeros:\n");
}

int maior(int p1, int p2){
	if(p1>p2){
		return p1;
	}else {
		return p2;
	}
}

int main(){
	saudacao();
	int a = 5;
	int b = 8;
	printf("Maior: %d", maior(a,b));
	return 0;
	
	system("clear");//limpar tela	
}