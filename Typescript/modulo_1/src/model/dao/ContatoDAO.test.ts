import { ContatoJsonDAO } from './ContatoJsonDAO_1'
import { ContatoCsvDAO } from './ContatoCsvDAO_1'
import { IContatoDAO } from './IContatoDAO'

describe('Testa os DAOs de Contato', () => {
    test('Deve recuperar todos os contatos dos repositórios', () => {
        // Informo que o tipo do ContatoDAO é um Interface
        let contatoDAO: IContatoDAO = new ContatoJsonDAO()
        let contatos = contatoDAO.recuperarContatos()
        expect(contatos.length).toBe(100)

        // reciclando chamada por meio da interface para o csv
        contatoDAO = new ContatoCsvDAO()
        contatos = contatoDAO.recuperarContatos()
        expect(contatos.length).toBe(100)

    })
})