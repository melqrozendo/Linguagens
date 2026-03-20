#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_PRODUTOS 100

struct Produto {
    int id;
    char nome[50];
    float preco;
};

struct Produto produtos[MAX_PRODUTOS];
int contadorProdutos = 0;

void criarProduto() {
    struct Produto novoProduto;
    
    printf("Digite o ID do produto: ");
    scanf("%d", &novoProduto.id);
    
    printf("Digite o nome do produto: ");
    scanf("%s", novoProduto.nome);
    
    printf("Digite o preco do produto: ");
    scanf("%f", &novoProduto.preco);
    
    produtos[contadorProdutos++] = novoProduto;
    
    printf("Produto criado com sucesso!\n");
}

void buscarProduto() {
	int i;
    int id;
    printf("Digite o ID do produto a ser buscado: ");
    scanf("%d", &id);
    
    for (i = 0; i < contadorProdutos; i++) {
        if (produtos[i].id == id) {
            printf("ID: %d\n", produtos[i].id);
            printf("Nome: %s\n", produtos[i].nome);
            printf("Preco: %.2f\n", produtos[i].preco);
            return;
        }
    }
    
    printf("Produto nao encontrado.\n");
}

void atualizarProduto() {
	int i;
    int id;
    printf("Digite o ID do produto a ser atualizado: ");
    scanf("%d", &id);
    
    for (i = 0; i < contadorProdutos; i++) {
        if (produtos[i].id == id) {
            printf("Digite o novo nome do produto: ");
            scanf("%s", produtos[i].nome);
            
            printf("Digite o novo preco do produto: ");
            scanf("%f", &produtos[i].preco);
            
            printf("Produto atualizado com sucesso!\n");
            return;
        }
    }
    
    printf("Produto nao encontrado.\n");
}

void deletarProduto() {
	int i, j;
    int id;
    printf("Digite o ID do produto a ser deletado: ");
    scanf("%d", &id);
    
    for (i = 0; i < contadorProdutos; i++) {
        if (produtos[i].id == id) {
            for (j = i; j < contadorProdutos - 1; j++) {
                produtos[j] = produtos[j + 1];
            }
            
            contadorProdutos--;
            printf("Produto deletado com sucesso!\n");
            return;
        }
    }
    
    printf("Produto nao encontrado.\n");
}

void listarProdutos() {
	int i;
	
    if (contadorProdutos == 0) {
        printf("Nenhum produto cadastrado.\n");
        return;
    }
    
    printf("Lista de produtos:\n");
    
    for (i = 0; i < contadorProdutos; i++) {
        printf("ID: %d\n", produtos[i].id);
        printf("Nome: %s\n", produtos[i].nome);
        printf("Preco: %.2f\n", produtos[i].preco);
        printf("------------------------\n");
    }
}

int main() {
    int opcao;
    
    do {
        printf("Menu:\n");
        printf("1. Criar produto\n");
        printf("2. Buscar produto\n");
        printf("3. Atualizar produto\n");
        printf("4. Deletar produto\n");
        printf("5. Listar produtos\n");
        printf("0. Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);
        
        switch (opcao) {
            case 1:
                criarProduto();
                break;
            case 2:
                buscarProduto();
                break;
            case 3:
                atualizarProduto();
                break;
            case 4:
                deletarProduto();
                break;
            case 5:
                listarProdutos();
                break;
            case 0:
                printf("Saindo...\n");
                break;
            default:
                printf("Opcao invalida.\n");
                break;
        }
        
        printf("\n");
    } while (opcao != 0);
    
    return 0;
}
