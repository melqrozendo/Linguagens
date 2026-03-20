#include <stdio.h>
/*presente de Noel*/
int main(){
	int n,i,j,aux;
	int cont = 1;
	int presente = 1;
	
	scanf("%d", &n);
	
	int acao[n];
	
	for(i=0;i<n;i++){
		scanf("%d", &acao[i]);
		
	}
	//bubble sort - ordenação crescente:  j = 1 e j+1 = 2, caso o elemento no indice 0 seja maior que o elemento do indice 1 => ordene
	for(i=0;i<n;i++){
		for(j=0;j<n-i-1;j++){
			if(acao[j]>acao[j+1]){
				aux = acao[j+1];
				acao[j+1] = acao[j];
				acao[j] = aux;
			}
		}
	}
	//verificar se a ordenação foi realizada com sucesso
	for(i=0;i<n-1;i++){
		if(acao[i]<acao[i+1]){//se o elemento de indice 0 for menor que de indice 1 => conte +1 e armazene em "presente(1)"
			cont++;
			presente +=cont;
		}else if(acao[i]==acao[i+1]){//se o elemento de indice 0 for igual ao de indice 1 => armazene cont(1) ao valor de presente(1)
			presente+=cont;
		}
	}
	
	printf("%d\n", presente);
}
