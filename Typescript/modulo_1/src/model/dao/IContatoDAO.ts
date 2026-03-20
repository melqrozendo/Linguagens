import { Contato } from "../entity/Contato"

export interface IContatoDAO {
    // criar assinatura do metodo recuperar contatos
    recuperarContatos(): Contato[]
}