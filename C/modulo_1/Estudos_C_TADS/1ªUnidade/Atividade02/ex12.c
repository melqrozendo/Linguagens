#include <stdio.h>
/*
33. Um produto vai sofrer aumento de acordo com a tabela abaixo. Leia o preço antigo, 
calcule e escreva o preço novo, e escreva uma mensagem em função do preço novo 
(de acordo com a segunda tabela).

PREÇO ANTIGO			PERCENTUAL DE AUMENTO
até R$ 50				5%
entre R$ 50 e R$ 100		10%
acima de R$ 100			15%
*/
int main(){
	float preco, desc, novopreco;
	
	printf("Digite o valor do produto: ");
	scanf("%f", &preco);
	
	if(preco<50){
		desc = (preco * 0.05);
		novopreco = preco - desc;
		printf("O preco do produto com desconto de 5%% foi: R$ %.2f", novopreco);
		
	}else if(preco >= 50 && preco < 100){
		desc = (preco * 0.10);
		novopreco = preco - desc;
		printf("O preco do produto com desconto de 10%% foi: R$ %.2f", novopreco);
		
	}else if(preco > 100){
		desc = (preco * 0.15);
		novopreco = preco - desc;
		printf("O preco do produto com desconto de 15%% foi: R$ %.2f", novopreco);
	}
}