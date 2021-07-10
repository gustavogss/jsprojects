//Criar uma função para mostrar os números primos
//Numero primo é aquele que é divisel por 1 ou ele mesmo. Ex: 11,7

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
  for (var numero = 2; numero <= limite; numero++){
    if (NumeroPrimo(numero)) console.log(numero);
  }  
}
function NumeroPrimo(numero) {
    for (var divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}
