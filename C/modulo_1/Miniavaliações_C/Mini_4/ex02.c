#include <stdio.h>
/*Semantica:
Consumo de combustivel em uma viagem
1-solicitar a quantidade de paradas para abastecer
2-solicitar o numero de km dirigidos
3-solicitar a quantidade de litros por abastecimento durante a viagem
4-exibir o consumo total = km_total/litros_total
5-codificar um controlador baseado na quantidade de abastecimentos realizados

*/
int main(){
    int paradas, x = 1;
    float litros_P, km_Rodados, consumo_P;
    float litros_Total, km_Total, consumo_Total;

    printf("Digite a quantidade de paradas: ");
    scanf("%d", &paradas);

    if(paradas > 0){
        while(x <= paradas){
            printf("Digite a quantidade de Litros em %dP: ", x);
            scanf("%f", &litros_P);
            printf("Digite a quantidade de KM rodados depois da parada em %dP: ",x);
            scanf("%f", &km_Rodados);
            
            //definir o consumo parcial apos paradas
            consumo_P = km_Rodados/litros_P;
            //obter o total de litros abastecidos
            litros_Total += litros_P;
            //obter o total de KM rodados
            km_Total += km_Rodados;
            //obter o consumo total durante a viagem
            consumo_Total = km_Total/litros_Total;

            //exibir consumo parcial de cada parada
            printf("O Consumo parcial de %dP apos abastecimento foi de: %.2fkm/h\n", x, consumo_P);
            printf("O consumo total foi de: %.2fkm/h\n", consumo_Total);
            //contador
            x++;
        }
    }
    return 0;
}