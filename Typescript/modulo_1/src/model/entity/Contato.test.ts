import { Contato } from "./Contato"

describe('Testa o modelo de Contato', () => {

    // 1- Teste de inicialização de um objeto
    test('Deve criar um contato com os atributos válidos', () => {
        const contato = new Contato(
            'Melquisedeque Rozendo',
            '(28) 62794-7297',
            'Lavinia59@gmail.com',
            new Date('1999-2-11')
        )

        expect(contato.nome).toBe('Melquisedeque Rozendo')
        expect(contato.telefone).toBe('(28) 62794-7297')
        expect(contato.email).toBe('Lavinia59@gmail.com')
        expect(contato.dataNascimento).toStrictEqual(new Date('1999-2-11'))
    })
})