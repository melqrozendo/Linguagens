import { ContatoCsvDAO } from './model/dao/ContatoCsvDAO_1';
import { ContatoJsonDAO } from './model/dao/ContatoJsonDAO_1';
import { ContaBancaria } from './model/entity/ContaBancaria';

// criando objeto conta1
const conta1 = new ContaBancaria()

/*
// Testando Encapsulamento
console.log(`Teste_1: ${conta1.saldo}`);
conta1.saldo = -205;
console.log(`Teste_2: ${conta1.saldo}`);
*/

/*
// criando variavel para receber o metodo consultar
let saldoAtual: number = conta1.consultar()
console.log(`Saldo Inicial: ${saldoAtual}`)

// passando parametro para o metodo depositar_1
conta1.depositar(50);
saldoAtual = conta1.consultar();
console.log(`Saldo Atual_1: ${saldoAtual}`)

// passando parametro para o metodo depositar_2
conta1.depositar(120);
saldoAtual = conta1.consultar();
console.log(`Saldo Atual_2: ${saldoAtual}`)

// passando parametro para o metodo sacar_1
let saqueValido = conta1.sacar(130);
if(saqueValido) {
    saldoAtual = conta1.consultar();
    console.log(`Saldo Atual_3: ${saldoAtual}`)
} else {
    console.log('Saque não válidado. Saldo insuficiente!')
}

// passando parametro para o metodo sacar_1
saqueValido = conta1.sacar(100);
if(saqueValido) {
    saldoAtual = conta1.consultar();
    console.log(`Saldo Atual_4: ${saldoAtual}`)
} else {
    console.log('Saque não válidado. Saldo insuficiente!')
}
*/

// Testando metodos get e set
conta1.conta = '01234-5'
conta1.agencia = '0123-4'
console.log(conta1)

// Testando Customização de Construtor
const conta2 = new ContaBancaria('12345-6', '1234-5')
console.log(conta2)

// Testando recuperação de contatos com json

// const contatoDAO = new ContatoJsonDAO()
// const contatoDAO = new ContatoCsvDAO()
// console.log(contatoDAO.recuperarContatos());