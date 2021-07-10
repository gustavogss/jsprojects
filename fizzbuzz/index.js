//Divisivel por 2 => Fizz;
//Disivel por 3 ==> Buzz;
//Divisivel por 2 e 3 ==> FizzBuzz;
//Não é divivel por 2 ou 3 ==> o mesmo número;
//Não é um número ==> não um número.

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){  
  if (typeof entrada !== 'number'){
    return 'Não é número'; 
  } else if ((entrada % 2 === 0) && (entrada % 3 === 0)){  
  return 'FizzBuzz';
  } else if (entrada % 2 === 0){
    return 'Fizz';
  } else if (entrada % 3 === 0){
    return 'Buzz'; 
  } else{
    return entrada;  
   }
  }
