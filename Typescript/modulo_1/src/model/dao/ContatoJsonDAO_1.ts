import { Contato } from '../entity/Contato'
import { ContatoDAO } from './ContatoDAO';

// classe ContatoDAO: classe mãe & classe ContratoJsonDAO: classe filha
export class ContatoJsonDAO extends ContatoDAO {

    constructor() {
        // chamada de super na classe, invoca o constructor da clsse mae
        super('contatos.json')
    }

    // criando metodo com retorno de um array
    recuperarContatos(): Contato[] {
        const listaObj: any[] = JSON.parse(this.conteudoStr) // atribuindo a lista um json
        const contatos = listaObj.map(obj => new Contato(
            obj.nome,
            obj.telefone,
            obj.email,
            new Date(obj.dataNasc)
        ))

        return contatos
    }
}