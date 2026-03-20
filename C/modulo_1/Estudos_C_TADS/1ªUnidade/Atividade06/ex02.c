#include <stdio.h>
/*Miniavaliação cap5 - Palíndromo de 5 números
*/

int main(){
	int n, a, b, c, d, soma;
	
	printf("<<<<<TESTADOR DE PALINDROMO>>>>> \n");
	printf("Escreva um numero com 5 digitos: \n");
	scanf("%d", &n);
	
	a = n%10000;
	printf("%d \n", a);
	b = a%1000;
	printf("%d \n", b);
	c = b%100;
	printf("%d \n", c);
	d = c%10;
	printf("%d \n", d);
	
	soma = a+b+c+d;
	if(soma = n){
		
		printf("%d, E um PALINDROMO", soma);
	}
	
}