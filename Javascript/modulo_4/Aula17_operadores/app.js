/*
Operadores em js:
+ (somar number e concatenar string)
- (subtrai number)
* (multiplica number)
/ (divide number)

+= (atribuir number)
-= (subtrai number)
*= (multiplica number)
/= (divide number)

<= (menor igual)
>= (maior igual)

Operadores de comparação em js:
== (compara se valores sao iguais)
=== (compara se valor e tipo de dado sao iguais)
!= (compara se valores sao diferentes)
!== (compara se valor e tipo de dado sao diferentes)

&& (and: os dois valores percisa ser verdadeiro)
|| (or: apenas um valor precisa ser verdadeiro)

Operadores ternarios:
<valor1> && <valor2> ? <caso true> : <caso false>
<valor1> || <valor2> ? <caso true> : <caso false>
*/
var a = 10;
var b = 14;
var soma = a + b;
console.log(soma);

var cont = 0;
var contando = () => {
    return cont += 1;
}
console.log(contando());
console.log(contando());

var carro = 'KA';
var marca = 'Ford';
var vendido = 'Foi vendido um '+ carro + ' da ' + marca;
console.log(vendido);


var a = 10;
var b = 5;
var c = 5;

if(a == b) {
    console.log('a e b sao iguais!');
} else if(a != 5) {
    console.log('a e b sao diferentes');
}

if( a === b) {
    console.log('a e b tem o mesmo valor e sao do mesmo tipo');
} else if(a !== b) {
    console.log('a e b tem valor e tipo diferentes')
}

if(a > 5 && b < 10){ //true e true = true
    console.log('verdade em AND');
}

if( a > 12 || b > 3){ //false ou true = true
    console.log('verdade em OR')
}

//operador ternario
a > 5 && b < 8 ? console.log('Yup') : console.log('Nop');

a < 10 || b == c ? console.log('Yup') : console.log('Nop');

