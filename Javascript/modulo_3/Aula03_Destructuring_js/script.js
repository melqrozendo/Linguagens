/*
O evento de mousemove possui proriedade de localização da seta do mouse na tela: (posição da seta da tela)
clientX (coordenad x)
clientY (coordenada y)

No JS tem-se uma forma de reduzir o codigo, realizando a desistruturação do codigo
*/
//CODIGO SEM DESTRUCTION

// //criando uma function 
// function handleMouseMove(event) {
//     //chamando propriedades especificas
//     const clientX = event.clientX;
//     const clientY = event.clientY;
//     // console.log(event);
//     console.log(clientX, clientY);
// }

// //convrsar com o html
// document.documentElement.addEventListener('mousemove', handleMouseMove);


//CODIGO COM DESTRUCTION - tipo 1

// function handleMouseMove(event) {
//     //desistruturar um objeto, trnasformando as propriedade do evento em constantes
//     const {clientX, clientY} = event;
//     console.log(clientX, clientY);
// }

// document.documentElement.addEventListener('mousemove', handleMouseMove);


//CODIGO COM DESTRUCTION - tipo 2
//(desistruturar direto no argumento)

// function handleMouseMove({clientX, clientY}) {
   
//     console.log(clientX, clientY);
// }

// document.documentElement.addEventListener('mousemove', handleMouseMove);


//CODIGO COM DESTRUCTION - tipo 3
//(desistruturar com array)
const frutas = ['Banana', 'Uva'];

//sem desistruturação
const fruta1 = frutas[0];
console.log(fruta1);//Banana

//aplicando a desistruturação
const [fruta01, fruta02] = frutas;
console.log(fruta1, fruta02);//Banana Uva

//veja que o array continua
console.log(frutas);

