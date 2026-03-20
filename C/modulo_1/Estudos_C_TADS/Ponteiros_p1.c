#include <stdio.h>

/*Ponteiros = aponta para o endereço de memoria de uma variavel que foi declarada
Apenas utilizado no C para se ter ideia de como o armazenamento de memoria ocorre
*/

int main(){
	short idade = 25;
	short *p_idade;//criando um ponteiro do tipo short
	
	p_idade = &idade;
	
	//exibir o conteudo e o endereço de memoria em que o conteudo da variavel esta armazenado
	printf("%d\n %p\n", idade, p_idade);
	
	return 0;
}
