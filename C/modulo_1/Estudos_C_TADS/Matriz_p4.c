#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*Consultar tabela ASCII*/

int main()
{
    int n,i,j, tam;
    int m = 1001;//qtd de caracter(colunas)
    char texto[n][m];
    
    scanf("%d", &n);//determina a qtd de frases
    
    //entrada das frases
    for(i=0;i<n; i++){
    	for(j=0;j<m;j++){
    		
    		printf ("\nElemento[%d][%d] = ", i, i);
			scanf("%s", &texto[i][j]);
			
			//tam = strlen(texto[i][j]);  
			//printf("O tamanho da string %s vale %d\n", texto[i][j], tam);
				  		
		}
    }
    
    for(i=0;i<n; i++){
    	for(j=0;j<tam;j++){
    		
    		printf("%c", texto[i][j]);
				  		
		}
    }
    
    /*
    //printf("%s", texto[i][j]);
    //verificar o tamanho da string
    for(i=0;i<n; i++){
    	for(j=0;j<n;j++){
    		printf("%s", texto[i][j]);
    		/*
			tam = strlen(texto[i][j]);  
			printf("O tamanho da string %s vale %d\n", texto[i][j], tam);
		}
    }
    /*
    for(i=0; i<n; i++){
    	for(j=0;j<tam;j++){
    		
			if(texto[i][j] >='a' && texto[i][j] <= 'z'){
				
    			texto[i][j]+=3;
    			
    			printf("%c", texto[i][j]);
    			
			}//fim do if
			
		}//fim coluna
		
		printf("\n");
		
	}//fim linha
	
	/*
    	if(texto[i][j] >='A' && texto[i][j] <= 'Z'){
    		texto[i]+=3;
    		printf("%c", texto[i][j]);
		}
		else if(texto[i] >='a' && texto[i] <= 'z'){
    		texto[i]+=3;
    		printf("%c", texto[i]);
		}   
    }//fim */
     
    //system("pause");
    return 0;
}
