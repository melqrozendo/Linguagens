Orientação a Objetos com TypeScript
Envolve 3 estudos:
1-Analise
2-Modelagem
3-Programação

#Comandos:
### npm run start
### npm run test
### npm run generate

#Pastas:
 - src: source
 - model: modelo
 - entity: entidades
 - dao: Data Access Object ou Objeto de acesso a dados (padrão que oferece uma abstração de acesso a um banco de dados, ela vai interagir com as entitys)


1-O que é TypeScript?
É o superset do Javascript, no uso do typescript adotasse a tipagem estática á linguagem
Vantages:
1. Menos Bugs em produção
2. Autocomplete Inteligente
3. Facilidade em Refatorar
Obs: Como ele funciona na prática?
O navegador não entende TypeScript diretamente. Por isso, existe um processo chamado transpilação: você escreve em .ts, 
o compilador verifica se há erros e "traduz" tudo para JavaScript puro (.js) para que o ambiente final consiga executar.
Obs: Com o typescript fazemos uso de tipos de variaveis, uso de polimorfismo e uso de interface;

Comandos:
### npm init -y
### npm i -D typescript ts-node @types/node
### npm install -D tsx
### npm start: para rodar no terminal

Instalando @types/node
Permite que o node entenda e o vs code vai dar autocomplete no ts

Projeto de typescript com node:
1-Criar uma pasta <src> e criar arquivo <index.ts>
2-no <packege.json> alterar o script para:
"scripts": {
  "start": "tsx index.ts"
}

3-Baseando projetono modelo de arquitetura MVC
No models teremos que definir a regra de negocio de uma aplicação a exemplo de um Banco, teremos:
- 1 entidade (conta Bancaria)
- 1 atributp (saldo)
- 3 operações:
    - consultar
    - sacar
    - depositar

4-Tipos basicos do typescript:
- number
- string
- boolean
- any

5-Quando quero definir uma conta bancaria para cada cliente eu crio um classe e depois crio instancias (cópias) que são chamados de objetos, para cada cliente

6-Encapsulamento:
Caso o saldo da conta bancaria nao estiver privado ele pode ser acessado  e alterado sem ser pelo metodos de consultar() e depositar()
Obs: no typescript é norma add _<metodo & variaveis>
### private _saldo: number
Agora só podemos acessar '_saldo' por meio dos metodos quando forem chamados;

7-Métodos Getter e Setter: (nivel de encapsulamento mais suave)
Getter: método que dá acesso ao valor de um determinado atributo (provavelmente privado).
Setter: método que realiza a alteração segura do valor de um determinado atributo (provavelmente privado).

Obs: Uso de Expressoes Regulares (regex): ferramenta de programação e processamento de texto para lidar com padrões de caracteres. Baseada em cadeias de caracteres e regras para encontar, validar ou manipular informações de acordo com esses padrões.
link: https://blog.casadodesenvolvedor.com.br/expressoes-regulares-regex/

8-Customizando Construtor para receber paramentros de entrada quando instanciados

Obs: Uso de Sobrecarga de construtores (Constructor Overlay) typescript é diferente do Java, pois temos que utilizar um recurso de colocar apos o parmetro do construtor uma <?>

Obs: O Operador <!> (Non-null Assertion): informa que  no typescript que o valor nao será nulo, mesmo que a variavel sendo string nao aceita valor <undefined>

9-Implementando Teste automatizados com Jest
Existe uma biblioteca ts-jest que traduz o typesacript para o jest.
1. Instalando depedencias:
### npm i -D jest @types/jest ts-jest

2. Adicionando ao script do <package.json> uam entrada de test com jest e dois paramentros:
"scripts": {
    "start": "tsx src/index.ts",
    "test": "jest --watchAll --coverage"
  },

3. Criando arquivo de test:
ContaBancaria.test.ts

Exemplo de teste cego:
// varificando se funciono a configuração
test('Testando se 1 + 1 o resultado foi 2', () => {
    expect(1+1).toBe(2)
})

4. Para rodar o teste no terminal:
### npx ts-jest config:init (cria um arquivo de configuração)*
OU crie o arquivo <jest.config.js>
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

5. rode o teste com:
### npm run test

Obs: um estudo de caso deve ser realizado
Para realizar teste de criação de uma conta bancaria:
1-Para cração de uma conta bacaria eu posso ter valores de conta e agencia padrao para um usuario
2-O usuario ao criar uma conta bancaria pode inserir valores de conta e agencia
3-O saldo de uma nova conta bancaria criado sempre deve iniciar com: 0
4-O usuario deve conseguir realizar deposito na conta

Obs: Moking ou 'Mocar' é uma técnica de trocar a execução de uma função externa por um valor falso.

Obs: O Node.js tem dois sistemas de módulos que não se bicam muito bem por padrão:

    CommonJS (CJS): Usa require e module.exports. É o padrão antigo do Node.

    ES Modules (ESM): Usa import e export. É o padrão moderno do JavaScript.

Quando você colocou "type": "module" no seu package.json, você proibiu o uso de module.exports em arquivos .js.

10-Criando arquivos programaticamente
1. Manipulação de arquivos .json e .csv
Esses arquivos gerados automaticamente serão uma base de dados
Implentação:
1- Criando arquivo <gerador_arquivos.ts>
2- Adicionando no <package.json> o script generate:
 "scripts": {
    "start": "tsx src/index.ts",
    "test": "jest --watchAll --coverage",
    "generate": "tsx src/gerador_arquivos.ts"
  },
3-Rodando no terminal:
### npm run generate
4-Instalando dependencias para gerar dados
### npm i faker (descontinuado) ou npm install @faker-js/faker --save-dev
### npm i -D @types/faker (buscando dentro do faker pacote do tipos especificos)
5-Cria a pasta 'data' dentro do 'src'
6-importa as funçoes dentro do <gerador_arquivos.ts>

Veja que! 
JSON: JavaScript Object Notation
CSV: Comma-Separated Values ou Valores Separados por Vírgula

O USO do FAKER é para gerar arquivos mocados para TESTES.

Bibliotetaca para validar email sem ser pelo Regex:
### npm i email-validator

2. Polimorfismo

1-Criando classe para extrair dados dos arquivos mocados do .json e .csv
2-Na pasta 'dao' criamos dois arquivos, sendo um para coletar os json <ContatoJsonDAO.ts> e outro para coletar do csv <ContatoCsvDAO.ts>
3- Toda classe DAO tem que ter um metodo para recuperar os dados e como garantimos isso:
Por meio de POLIMORFISMO (ou interfaces) que permite realizar uma ação especifica de várias formas. ou seja, vamos ter classes com comportamentos parecidos com certas variações. Na pratica a recuperação de contato para .json é diferente do .csv
4-Vamos implementar uma INTERFACE: permite especificar quais métodos uma classe de um determindado domínio deve implementar. No typescript,é comun o uso de interfaces tbm para implementar estruturas de dados simples, como objetos que apenas possuem atributo, semmétodos ou getters e setters.
5-criando arquivo de interface <IContatoDAO.ts>
6-assim todos que assinarem esse contrato de polimorfico tem que chamar o metodo recuperarContatos()
7-Para recuperar arquivos csv percisa-se de uma lib:
### npm i csv-parse

Obs: o parse do json é o objeto javascript, já o parse do conteudo csv deve retornar um array de arrays.

8-criar um arquivo de teste <ContatoDAO.test.ts>
9-rodando teste:
### npm run test

3. Classe Abstrata
A classe abstrata resolve o problema de repetição de bloco de codigo, no exemplo que temos existe uma repetição de codigo para recuperar dados do arquivos 'data'.

Obs: Interface não tem implementação ela apenas tem assinatura de métodos.

1-Na pasta 'dao' criar uma arquivo <ContatoDAO.ts> para implementar a classe abstrata
2-As classe que herdarem um contrato polimorfico ou uma classe abstrata tem que ter permissão de acesso do tipo:
PROTECTED: o acesso é que está dentro da classe e quemfez o contrato polimorfico.

Niveis de acesso:
public
private
protected

4. Polimorfismo com Herança
A Herança é quando na minha classe principal realizo o 'extends' de uma classe abstrata que se conecta com o uma interface

OBS: A diferença entre uma Interface e uma classe abstrata
Na interface deve fazer apenas assinaturar de metodos existentes na classe, já na classe abstrata é possivel implementar assinaturas abstratas de metodos e blocos de codigos que quem assina o contrato de polimorfico ou herda a classe deve fazer.