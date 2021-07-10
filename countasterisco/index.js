/** Criar um função que exiba a quantidade 
 * de * que a linha possui
 * */
exibirAsteriscos (10);

function exibirAsteriscos(linhas){
  var padrao = '';
  for (var i=0; i<=linhas; i++){
    padrao += '*';//padrao = padrao+'*'
    console.log(padrao);
  }
}
