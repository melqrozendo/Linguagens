import { readFileSync } from "fs"
import { join } from "path"
import { Contato } from "../entity/Contato"

// criando classe abstrata
export abstract class ContatoDAO {

    // A permição de acesso deve ser protected
    protected conteudoStr: string
    
    constructor(nomeArquivo: string) {
        const caminhoArquivo = join(__dirname, '../..', 'data', nomeArquivo) // pegando caminho do arquivo
        this.conteudoStr = readFileSync(caminhoArquivo, 'utf-8') //uso do utf-8 para quebra buffer e gerar string
    }

    // trazer o metodo da interface quequem assinar o contrato polimorfico tem acesso
    abstract recuperarContatos(): Contato[]

}