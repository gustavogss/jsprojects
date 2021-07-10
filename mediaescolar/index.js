//Nota Escolar
//Obter a media a apartir de um array
/**
 * 0-59: F
 * 60-69: D
 * 70-79: C
 * 80-89: B
 * 90-100:A
 */
const array = [75, 70, 85];
console.log(mediaAluno(array));

function mediaAluno(notas){ 
const media = calcularMedia(notas);
if(media<59) return 'F'; 
if(media<69) return 'E'; 
if(media<79) return 'C'; 
if(media<89) return 'B'; 
return 'A';
}
function calcularMedia(array){
  var soma = 0;
  for (var valor of array){
    soma += valor;
  }
return soma/(array.length);
}