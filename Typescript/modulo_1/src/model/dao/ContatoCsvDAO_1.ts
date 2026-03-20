import { Contato } from '../entity/Contato'
import { parse } from 'csv-parse/sync';
import { ContatoDAO } from './ContatoDAO';

export class ContatoCsvDAO extends ContatoDAO {
    
    constructor() {
        super('contatos.csv')
    }
    
    // criando metodo com retorno de um array
    recuperarContatos(): Contato[] {
        const listaObj: any[] = parse(this.conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj[0],
            obj[1],
            obj[2],
            new Date(obj[3])
        ))

        return contatos
    }
}