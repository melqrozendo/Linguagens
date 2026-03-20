// Criação de arquivos:
import { writeFileSync } from 'fs' // Import função de manipulação de arquivos
import { join } from 'path' // Import função para apontar o caminho relativo
import { fakerPT_BR as faker } from '@faker-js/faker'

const contatos = [] // criando array para json
let linhasCSV = '' // criando string para csv

const numeroContatos = 100
for(let i = 0; i < numeroContatos; i++) {
    const obj = {
        nome: faker.person.firstName(),
        telefone: faker.phone.number(),
        email: faker.internet.email(),
        dataNasc: faker.date.past()
    }

    // alocar os elementos de contatos nos conteudos dos arq
    contatos.push(obj); // para json
    const linha = `${obj.nome},${obj.telefone},${obj.email},${obj.dataNasc}`; // uso de interpolação de strings
    linhasCSV += linha + '\n';
}

// enviar para os arquivos: __dirname é um variavel global
const caminhoDoArquivos = join(__dirname, 'data')

//JSON:
const strJosn = JSON.stringify(contatos);
const caminhoArquivoJSON = join(caminhoDoArquivos, 'contatos.json')
writeFileSync(caminhoArquivoJSON, strJosn)
// CSV:
const caminhoArquivoCSV = join(caminhoDoArquivos, 'contatos.csv')
writeFileSync(caminhoArquivoCSV, linhasCSV)

console.log('Arquivos gravados');
