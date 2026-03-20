#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 2

//criando struct com defini��o de tipo:
typedef struct _Produto {
	int id_produto;
	char nome_produto[20];
	float preco_produto;
	int estoque_produto;
	
} produto; //variavel com espa�o para dois produtos

int contador = 0; //contador criado para controlar qtd de cadastro

//criando fun��o de cadastro:
int cadastrarProduto(produto *prod, int contador){
	//int i;
	//chamando struct
	produto produto;
	
	puts("-----------------------");
	printf("Codigo do Produto: "); 
	scanf("%d", &produto.id_produto);
    getchar();//fun��o que coleta um caracter e uso para limpar o buffer de entrada
	printf("Nome do Produto: ");
	scanf("%19[^\n]", produto.nome_produto);//ler 19 caracter ate achar o \name
	printf("Preco do Produto: ");
	scanf("%f", &produto.preco_produto);
	printf("Estoque do Produto: ");
	scanf("%d", &produto.estoque_produto);
	puts("-----------------------");
	
    prod[contador]=produto;
    return 1;
}
//criando fun��o de buscar:
void buscarProduto(produto *prod, int contador){
	int i, id;
    
    printf("Digite o ID do produto: ");
    scanf("%d", &id);
	
	for(i=0; i<contador; i++){
		//definir um sele��o de controle
        if(prod[i].id_produto == id){
            printf("\nId: %d\n", prod[i].id_produto);
            printf("Nome: %s\n", prod[i].nome_produto);
            printf("Preco: %.2f\n", prod[i].preco_produto);
            printf("Estoque: %d\n", prod[i].estoque_produto);
            puts("-----------------------");
        }
	}
}
//criando fun��o de atualizar:
void atualizarProduto(produto *prod, int contador){
	int i, id;
    
    printf("Digite o ID do produto: ");
    scanf("%d", &id);
	
	for(i=0; i<contador; i++){
		//definir um sele��o de controle
        if(prod[i].id_produto == id){
            getchar();
            printf("Digite novo Nome do Produto: ");
            scanf("%19[^\n]", prod[i].nome_produto);

            printf("Digite novo Preco do Produto: ");
            scanf("%f", &prod[i].preco_produto);

            printf("Digite novo Estoque do Produto: ");
            scanf("%d", &prod[i].estoque_produto);
            puts("-----------------------");
        }
	}
}
//criando fun��o de deletar:
int deletarProduto(produto *prod, int contador){
    int i, x, id;
	//chamando struct
	//produto produto;

    printf("Digite o ID do produto: ");
    scanf("%d", &id);

    for(i=0; i<contador; i++){
        if (prod[i].id_produto == id) {
				for(x=i; x < contador - 1; x++){
				prod[x] = prod[x+1]; 
				//nessa logica o proximo contudo do struct vai subescrever o conteudo do struct naquela posição deletado
			}	
			//apos subescrever devemos decrementar o contador e retornar o valor para chamada no menu
			contador--;	
			//printf("%d\n", contador);
			return contador;
        }
    }
}
//criando fun��o de listar:
void listarProduto(produto *prod, int contador){
	int i;
    printf("%d \n", contador);//verificando o valor do contador
	if(contador == 0){
		printf("Banco de produtos Vazio! \n");
	}
	
	for(i=0; i<contador; i++){
			//puts("-----------------------");
			printf("\nId: %d\n", prod[i].id_produto);
			printf("Nome: %s\n", prod[i].nome_produto);
			printf("Preco: %.2f\n", prod[i].preco_produto);
			printf("Estoque: %d\n", prod[i].estoque_produto);
			puts("-----------------------");
	}
}
//fun��o principal:
int main(int argc, char *argv[]) {
	int opcao;
    produto prod[MAX];
	
    do{

        puts("----------MENU---------");
        puts("1-Cadastrar Produtos:");
        puts("2-Buscar o Produto: ");
        puts("3-Atualizar o Produto:");
        puts("4-Delete o Produto:");
        puts("5-Listar Produtos:");
        puts("0-Sair");
        puts("-----------------------");
	
		
		scanf("%d", &opcao);
		
		switch(opcao){
		case 1: 
			//cadastrar dados:
			/*o que retorna a função é atribuido ao contador
				assim ao fazer o 1º cadastro a função retorna 1 e
				atribui ao contador			
			*/
            contador += cadastrarProduto(prod, contador);
			break;
        case 2: 
			//Buscar dados:
			buscarProduto(prod, contador);
			break;
		case 3: 
			//Atualizar dados:
			atualizarProduto(prod, contador);
			break;
		case 4: 
			//Deletar dados:
			//deletarProduto(prod, contador);
			/*qnd chamar a função delete, ela vai retornar um contador
				decrementado pois um ID foi deletado
			*/
			contador = deletarProduto(prod, contador);
			//printf("%d\n", contador);
			break;
		case 5: 
			//listar dados:
            listarProduto(prod, contador);
			break;
		case 0:
			//sair
			puts("Saindo da pagina...");
			break;
		default:
			printf("Opcao invalida \n");
			//return(EXIT_FAILURE);
	}
		
	}while(opcao != 0);
	
	return 0;
}