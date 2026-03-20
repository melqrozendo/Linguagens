import { ContaBancaria } from "./ContaBancaria"

// describe recebe uma string e um arrow function
describe('Testa as funcionalidade de uma conta bancária', () => {

    // 1- Teste de inicialização quando o objeto é criado
    test('Deve criar um conta bancária com Conta e Agência padrões', () => {
        const conta = new ContaBancaria();
        // testando
        expect(conta.conta).toBe('00000-0')
        expect(conta.agencia).toBe('0000-0')
    })

    // 2- Teste de inicialização quando o objeto é criado e recebe paramentros
    test('Deve criar uma conta bancária com Conta e Agência com valores especificados', () => {
        const contaValue = '12345-6';
        const agenciaValue = '1234-5';
        const conta = new ContaBancaria(contaValue, agenciaValue);
        // testando
        expect(conta.conta).toBe(contaValue)
        expect(conta.agencia).toBe(agenciaValue)
    })

    // 3- Teste de verificação se a conta bancaria criada esta zerada
    test('O saldo de uma nova conta bancária deve ser igual a zero', () => {
        const conta = new ContaBancaria();
        expect(conta.consultar()).toBe(0)
    })

    // 4- Tetse de deposito
    test('O saldo deve ser alterado corretamente após ser realizados depósitos', () => {
        const conta = new ContaBancaria();
        conta.depositar(25)
        conta.depositar(50)
        conta.depositar(125)
        expect(conta.consultar()).toBe(200)
    })

    // 5- Teste de saque
    test('O saldo deve ser alterado corretamente após ser realizados saques', () => {
        const conta = new ContaBancaria();
        conta.depositar(500)
        conta.sacar(35.25)
        expect(conta.consultar().toFixed(2)).toBe('464.75')
    })
})