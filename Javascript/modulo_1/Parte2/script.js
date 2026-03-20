function verificar(){
    //window.alert("Funcionou!")
    //pegar data atual:
    var data = new Date()
    var ano = data.getFullYear()
    //criar um formulario do ano que vem do documento:
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //verificar se a caixa de texto esta vazia ou se é maior que o ano atual:
    if(fano.value.length == 0 || Number(fano.value) > ano){
        //microvalidação
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //testando resultado:
        //res.innerHTML = `Idade calculada: ${idade} anos`
        //verificar a variavel do genero:
        var genero = ''
        //criar um <img> dinamicamente:
        var img = document.createElement('img')
        //criando um atributo para <img>
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/crianca-H.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-H.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-H.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-H.jpg')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/crianca-M.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-M.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-M.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-M.jpg')
            }
        }
        //centralizando via script o innerHtml:
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        //adicionando imagem ao elemento res:
        res.appendChild(img)

    }
}