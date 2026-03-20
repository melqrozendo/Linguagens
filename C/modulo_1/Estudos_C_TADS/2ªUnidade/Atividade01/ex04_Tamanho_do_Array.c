#include <stdio.h>

int main(){
	int v[] = {0, 1, 3, 4, 5};
	int x=0;
	//pecorrer o tamanho do array
	//dividindo a qntd de bytes total do vetor/a qntd de byte do elemento de indice 0
	size_t n = sizeof(v)/sizeof(v[0]);
	
	while(x < n){
		printf("%d ", v[x]);
		x++;
	}
	return 0;
}
