#include <stdio.h>
/*casas do tabuleiro*/
int main(){
	int n, casa;
	int i,j;
	int c1 = 0;
	int c2 = 0;
	
	scanf("%d", &n);
	int tab[n][n];
	
	//logica
	for(i=0;i<n;i++){
		for(j=0;j<n;j++){
			casa = (i+j)%2;
			
			if(casa==0){
				//puts("branco");
				printf(" o ");
				c1++;
			}else if(casa!=0){
				//puts("preto");
				printf(" x ");
				c2++;
			}
		}//coluna
		puts(" ");
	}//linha
	
	printf("\n%d casas brancas e %d casas pretas", c1,c2);
}
