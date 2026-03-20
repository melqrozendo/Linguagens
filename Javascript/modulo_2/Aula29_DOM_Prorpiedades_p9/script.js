/*
Prooriedades do DOM(Document Object Model)
-o 'objeto document' não tem somente metodos
-podemos retirar varias informações importantes das suas propriedades (podemos acessar varias tags por meio de uma propriedade)

*/
//propriedade document

//propriedades da configuração
console.log(document.head);
//propriedades da paginação
console.log(document.body);
//propriedade de links
console.log(document.links);
console.log(document.links[0]);

//alterando links atraves das propriedades:
document.links[0].textContent = 'Renault';
document.links[1].textContent = 'Jeep'

//propriedade de URL da pagina
console.log(document.URL);

//propriedade para ver o title
console.log(document.title);

//alterando title atraves da propriedade
document.title = "Propriedades do DOM";
console.log(document.title);

