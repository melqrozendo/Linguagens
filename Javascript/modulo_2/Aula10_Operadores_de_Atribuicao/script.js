/*
Operadores de Atribuição:
+= (x = x + y)
-= (x = x - y)
*= (x = x * y)
/= (x = x / y)

incremetar 
++
decrementar 
--
*/
/*******************************************/
var x = 1;
var y = 2;

//soma
console.log(x = x + y); //x = 3;
console.log(x+=y);//x = 3+2

//subtracao
console.log(x = x - y);//x = 5-2
console.log(x-=y); // x = 3-2

//multiplicação
console.log(x = x * y);//x = 1*2
console.log(x*=y); // x = 2*2

//divisao
console.log(x = x / y);//x = 4/2
console.log(x/=y); // x = 2/2

//incrementar x
x++;
console.log(x);
//decrementar x
x--;
console.log(x);