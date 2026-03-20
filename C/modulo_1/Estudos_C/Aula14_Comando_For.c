/*
Comando for: (loops/laços contados)

similar ao while por possuir:
1-inicialização
2-condição
3-atualização (variavel de controle)

Diferença entre for e While:
1-Sintaxe mais complexa
2-Tudo fica embutido no comando

sintaxe:

for(<ini.>; <cond.>; <incr.>){
	<bloco_de_comando>
}
*/
#include <stdio.h>

int main(){
	
	int i;
	
	for(i=1; i<=10; i++){
		printf("%d", i);
	}
}

