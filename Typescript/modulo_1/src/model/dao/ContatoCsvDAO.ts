import { Contato } from '../entity/Contato'
import { IContatoDAO } from './IContatoDAO'
import { join } from 'path' // Import função para apontar o caminho relativo
import { readFileSync } from 'fs' // Import função de manipulação de arquivos
import { parse } from 'csv-parse/sync';

export class ContatoCsvDAO implements IContatoDAO {

    private _caminhoArquivo: string
    
    constructor() {
        this._caminhoArquivo = join(__dirname, '../..', 'data', 'contatos.csv') // pegando caminho do arquivo
    }
    
    // criando metodo com retorno de um array
    recuperarContatos(): Contato[] {
        const conteudoStr = readFileSync(this._caminhoArquivo, 'utf-8') //uso do utf-8 para quebra buffer e gerar string
        const listaObj: any[] = parse(conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj[0],
            obj[1],
            obj[2],
            new Date(obj[3])
        ))

        return contatos
    }
}