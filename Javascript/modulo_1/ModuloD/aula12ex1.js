var idade = 48;
console.log (`Sua idade é ${idade}`)
if(idade < 16){
    console.log(`Voto não é obrigatório`)
}else if(idade < 18 || idade >= 65){
    console.log (`Voto é opcional`)
}else{
    console.log (`Voto é obrigatório`)
}
