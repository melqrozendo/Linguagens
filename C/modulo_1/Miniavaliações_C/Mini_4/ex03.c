#include <stdio.h>
/*
Limite de cartão de credito
1-solicitar o numero do cartão
2-solicitar o saldo do cartão do Mes
3-solocitar os gastos do cartão do Mes
4-solicitar os creditos disponiveis ao cliente no Mes
5-solicitar o limite de credito da conta do cliente
6-verificar se o cliente tem margem
*/
int main(){
     //declaracao de variaveis
    int numeroConta;
    float saldoInicioMes, totalEncarcosMes, totalCreditosMes, limiteCredito, saldoAtual; 
    
    //entrada de dados e processamento
    
    while (numeroConta != -1) 
    {
        printf("Informe o Numero da Conta (-1 para terminar): ");
        scanf ("%d", &numeroConta);
        printf("Informe o Saldo inicial: ");
        scanf ("%f", &saldoInicioMes);
        printf("Informe o Total de Encargos do cliente no mes: ");
        scanf ("%f", &totalEncarcosMes);
        printf("Informe o Total de Crédidos do cliente no mes: ");
        scanf ("%f", &totalCreditosMes);
        printf("Insira o Limite de Crédito Autorizado: ");
        scanf ("%f", &limiteCredito);    

        saldoAtual = saldoInicioMes + totalEncarcosMes - totalCreditosMes;
        if (saldoAtual > limiteCredito)
        {
            printf ("Conta: %d\n", numeroConta);
            printf ("Limite de credito:  %.2f\n", limiteCredito);
            printf ("Saldo:  %.2f\n", saldoAtual);
            printf ("Limite de Credito Ultrapassado \n");
        } 
            
        printf ("\n");
        printf("Informe o Numero da Conta (-1 para terminar): ");
        scanf ("%d", &numeroConta);     
    } 

    return 0;

}