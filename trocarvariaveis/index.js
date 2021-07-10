var a = 'X'; //a=X
var b = 'Y'; //b=Y

var c = a; //cria uma outra variavel c para guardar o valor de a
a = b; // para inverter os valores a recebe o valor de b
b = c; // o b passa a receber o valor de a que está em c

console.log(a); //a=Y
console.log(b); //b=X