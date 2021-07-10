//Criar função para somar todos os multiplus de 3 e 5
somar (10);
function somar(limite){
  var multiploDeTres = 0;
  var multiploDeCinco = 0;

  for(i=0; i<limite; i++){
    if (i % 3 === 0)
      multiploDeTres += i; //multiploDeTres = multiploDeTres + i
    if (i % 5 === 0)
      multiploDeCinco += i;//multiploDeCinco = multiploDeCinco + i
    }
    console.log(multiploDeCinco + multiploDeTres);
  }    
  
