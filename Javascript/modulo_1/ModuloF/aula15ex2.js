//criando uma estrutura de repetição com FOR:
let valores =[1,2,3,4,5]

//console.log(valores[0])

//codigo de percurso de vetores
/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
*/

//codigo simplificado

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}