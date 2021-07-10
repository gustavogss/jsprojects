//Receber uma quantidade de valores para exibir
// Função irá exibir se cada valor é par ou impar
exibirNumero(7);
function exibirNumero(limite){  
  for (var i=0; i<=limite; i++){
    if (i % 2 === 0){
      console.log(i + ' é par');
    } else{
      console.log(i + ' é impar');
    }
  }
}