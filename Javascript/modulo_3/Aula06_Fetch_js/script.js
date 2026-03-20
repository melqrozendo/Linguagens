/*
Fetch: 
Envia requisição assincrona (o codigo roda, mesmo o servidor lento, porem não trava o resto do codigo do JS) para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

1-fetch é uma função, que retorna uma promise.
2-assim, podemos usar o then(), pois quando a função fetch for resolvida o then() será executando.
3-No then(), podemos passar uma função de callback, que vai ocorrer apos a promisses ser resolvida.
4-verificar que tipo de arq estou requisitando(tipo html, tipo json), para que possamos transformar (a transformação é assincrona, por isso o retorno é de uma promisse).
5-com fecth é possivel puxar informação do servidor e enviar informação (cadastrar) com metodo POST no servidor.
6-para fazer isso passamos uma url e um objeto com opçoes (metodo de envio)
(cabeçalho)
(corpo no formado do tipo string)


url para pegar dados no padrao Json:
Url: https://ranekapi.origamid.dev/json/api/produto

*/

//Testando retorno da função fetch
// const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto").then(function(response) {
//     console.log(response);
// });

//Testando o retorno da função fetch e tranformando em json
// const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto").then((response) => {
//     console.log(response);
//     //transformando o tipo de arq requisitado em json
//     const rp = response.json();
//     console.log(rp);
// });

/*

const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto")
.then((response) => {
    //assincrono retorna uma promisses
    return response.json();//promisse
})
.then((jsonBody) => {
    console.log(jsonBody);//retorna um objeto final
    //selecionar um elemento no servidor para exibir no html
    document.querySelector('#app').innerHTML = jsonBody[0].nome;
});

// console.log(requisicao);//promisse em estado pendente

*/

//enxugando codigo:
fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response => response.json())
    .then(jsonBody => {
        console.log(jsonBody);
        document.querySelector('#app').innerHTML = jsonBody[1].nome;
    });

//enviando dados para o servidor
/*
const data = {
    id: "andrerafa",
    nome: "Andre",
    email: "andrerafa@origamid.com",
    senha: "123456",
    cep: "123456",
    rua: "Ali Perto",
    numero: "230",
    bairro: "Botafogo",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro"
}

//enviando dados para o servidor
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});

*/