#include <stdio.h>

int main(){
	int vet[3] = {0,1,2};
	int i;
	for(i=0; i<3; i++){
		printf("%d ", vet[+i]);
	}
}