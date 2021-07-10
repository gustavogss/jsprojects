/** Numero de vezes que 
 * uma letra aparece na frase 
 */

function vezesLetraAparece(frase, letra) {
  var quantidade = 0;
  for (var i=0; i<frase.length; i++){
   if(frase[i] == letra){
    quantidade++;  
   }    
  }
return quantidade;
}