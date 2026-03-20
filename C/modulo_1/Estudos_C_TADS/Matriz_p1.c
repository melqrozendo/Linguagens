#include <stdio.h>
#include <stdlib.h>

#define LIN 2
#define COL 2

int main(){
	 char jogo[LIN][COL] = {"A","B",
	 						"C","D"};
		int i,j;
		for(i=0; i<=LIN;i++){
			for(j=0; j<=COL;j++){
				printf("%c", jogo[i][j]);
			}
			printf("\n");
		}
}
