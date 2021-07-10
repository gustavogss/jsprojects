//velocidade máxima 80km
//para cada 5km 1 ponto na carteira
//caso os pontos forem maior que 12 a Carteira é suspendida
medirVelocidade(102); 
function medirVelocidade(velocidade){
  const velocidadeMax = 80;  
  const kmPorPonto = 5;
  if (velocidade<=velocidadeMax){
    console.log('OK');
  }else{
    const pontos = Math.floor((velocidade - velocidadeMax)/kmPorPonto); //Math.floor arredonda
    if (pontos >=12){
      console.log('Sua carteira foi suspensa');
    } else{
      console.log('Você recebeu: '+ pontos + ' pontos na Carteira');
    }
  } 
}
  