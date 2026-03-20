function contar(){
    var n1 = document.querySelector('input#txtn1')
    var n2 = document.querySelector('input#txtn2')
    var n3 = document.querySelector('input#txtn3')
    var res = document.querySelector('div#res')

    //window.alert(`${n1.value}, ${n2.value}, ${n3.value}`)
    var c1 = Number(n1.value)
    var c2 = Number(n2.value)
    var c3 = Number(n3.value)

    if(c1.length == 0 || c2.length == 0 || c3.length == 0){
        //window.alert('[ERRO] Digite os dados!')
        res.innerHTML = '[ERRO] Digite os dados!'
    }else if(c3 <= 0 || c3 > c2){
        window.alert('Passo inválido! Considerando PASSO 1')
        c3 = 1
    }else {

        if(c1<c2){
            //contagem crescente:
            for(let cont = c1; cont <= c2; cont += c3){
                res.innerHTML += `${cont} \u{1F929}`
            }
            //res.innerHTML += `\u{1F47D}`

        } else {
            //contagem regressiva:
            for(let cont = c1; cont >= c2; cont -= c3){
                res.innerHTML += `${cont} \u{1F47E}`
            }
            //res.innerHTML += `\u{1F916}`
        }
        res.innerHTML += `\u{1F916}`
    }
}

function limpar(){
    var n1 = document.querySelector('input#txtn1')
    var n2 = document.querySelector('input#txtn2')
    var n3 = document.querySelector('input#txtn3')
    var res = document.querySelector('div#res')

    n1.value = ''
    n2.value = ''
    n3.value = ''    
    res.innerHTML = ''

}