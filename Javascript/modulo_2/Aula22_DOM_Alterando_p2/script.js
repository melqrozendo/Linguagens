/*
Alterando os elementos do DOM(Document Object Model)
Etapas:
1-selecionar o elemento
2-alterar o conteudo:
innerHTML (menos profissional)
textContent (mais profissional)

*/
var title = document.querySelector('#title');
//console.log(title);

//innerHTML
title.innerHTML = "Dados Pessoais de Melquisedeque";

//textContent
var subtitle = document.querySelector('.subtitle');
//console.log(subtitle);
subtitle.textContent = "Formação de Turmas";

