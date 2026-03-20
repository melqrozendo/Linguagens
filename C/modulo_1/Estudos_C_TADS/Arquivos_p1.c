#include <stdio.h>
#include <stdlib.h>

/*
Arquivos:
pode ser salvo em .txt ou bin
pode ser manipulado:
utiliza-se um ponteiro para o arquivo do tipo FILE *f
Assim, teremos:
1- Abrir/Criar
2- Manipular
3- Fechar

*/
int main(){
	FILE *f = fopen("arq.txt", "w"); //abre e cria o arquivo
	
	return 0;
}