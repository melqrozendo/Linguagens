/*
Async/Await:
Fetch retorna uma promisse. É possivel criarmos funçoes assincronas, que irão esperar a promisse resolver, antes de continuar com o codigo.

usamos async e await tanto para criar funçoes diretas ou metodos de objetos (para informar que é um metodo assincrono).

Uso:
1-Não precisar usar o then (muito repetivito na função fetch)
2- assim, com async, criamos uma função de fecth que retorna uma promessa (promisse) e aguardamos (await) a response das promessas (promisses) para atribuirmos a uma constante.
3-await só serve para promisse


obs:: tambem podemos colocar try { } e catch(e) { } para lidarmos com erros
*/

//Teste: o console.log não espera a promisse ser realizada
/*
async function fecthProdutos(url) {
    const response = fetch(url);
    console.log(response);
}

fecthProdutos('https://ranekapi.origamid.dev/json/api/produto');
*/

async function fecthProdutos(url) {
    const response = await fetch(url);
    //tranformando o arq em json
    const jsonBody = await response.json();
    // console.log(jsonBody);//objeto final
    //definir um retorno
    return jsonBody;
}

fecthProdutos('https://ranekapi.origamid.dev/json/api/produto');

/*

//verificando o retorno do objeto final

const resquisicao = fecthProdutos('https://ranekapi.origamid.dev/json/api/produto');

resquisicao.then(response => {
    console.log(response);
});

*/
