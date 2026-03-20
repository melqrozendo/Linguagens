function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,4))

//parametros opcionais

function soma(n1=0, n2=0) { //não permitir retornar valor indefinido
    return n1 + n2
}

console.log(soma(2))
