//criar uma função
function carregar(){
    //selecionando o elemento da div
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    //selecionar a data
    var data = new Date()
    //selecionar a hora
    var hora = data.getHours()
    //var hora = 8

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //chamar foto de Bom dia
        //foto.src = 'img/foto-1.jpg'
        foto.innerHTML = '<img src="img/foto-1.jpg">'
        //adicionando cor de fundo no corpo do documento
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <18){
        //chamar foto de Boa tarde
        //foto.src = 'img/foto-2.jpg'
        foto.innerHTML = '<img src="img/foto-2.jpg">'
        //adicionando cor de fundo no corpo do documento
        document.body.style.backgroud = '#b9846f'
    } else {
        //chamar foto de Boa noite
        //foto.src = 'img/foto-3.jpg'
        foto.innerHTML = '<img src="img/foto-3.jpg">'
        //adicionando cor de fundo no corpo do documento
        document.body.style.background = '#515154'
    }
}