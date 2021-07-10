/*
 * Complete a função 'calculadoraAdicaoSubtracao' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. numero (número inteiro)
 *  2. outroNumero (número inteiro)
 *  3. operacao (string)
 */
function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {  
  if (operacao=='+'){
     return numero + outroNumero;
 } else if (operacao =='-'){
      return numero - outroNumero;
 } else {
   return 0;
 } 
 }

