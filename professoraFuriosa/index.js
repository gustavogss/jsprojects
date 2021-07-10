/**
 * A professora depende do numero de alunos 
 * presentes para dá aula. qtdMin = 2alunos
 */
function acontece(alunos, qtdmin){
  var countInTime = 0;
  for (const aluno of alunos){
    if(aluno <= 0){
      countInTime +=1;
    }
  }
  return countInTime >= qtdmin
}
var alunosDaSegunda = [10, -5, 3, 0];
console.log(acontece(alunosDaSegunda, 2));