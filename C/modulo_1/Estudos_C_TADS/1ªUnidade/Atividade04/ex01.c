#include <stdio.h>

int main(){
	
	int x;
	int soma = 0;
	
	for(x=1; x<=1000; x++){
		
		if(x % 3 == 0 || x % 5 == 0){
			
			//printf("%d ", x);//imprime cada valor divisivel por 3 ou por 5
			soma = soma + x;	
		}	
	}
	printf("%d ", soma);//imprime o somatorio dos valores divisivel por 3 ou 5
}
