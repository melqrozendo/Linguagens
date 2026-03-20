import { Contato } from '../entity/Contato'
import { IContatoDAO } from './IContatoDAO'; // Interface
import { join } from 'path' // Import função para apontar o caminho relativo
import { readFileSync } from 'fs' // Import função de manipulação de arquivos

export class ContatoJsonDAO implements IContatoDAO {

    private _caminhoArquivo: string

    constructor() {
        this._caminhoArquivo = join(__dirname, '../..', 'data', 'contatos.json') // pegando caminho do arquivo
    }

    // criando metodo com retorno de um array
    recuperarContatos(): Contato[] {
        const conteudoStr = readFileSync(this._caminhoArquivo, 'utf-8') //uso do utf-8 para quebra buffer e gerar string
        const listaObj: any[] = JSON.parse(conteudoStr) // atribuindo a lista um json
        const contatos = listaObj.map(obj => new Contato(
            obj.nome,
            obj.telefone,
            obj.email,
            new Date(obj.dataNasc)
        ))

        return contatos
    }
}