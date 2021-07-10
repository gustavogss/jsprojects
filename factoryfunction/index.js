function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
  return{
    marcaCelular,
    tamanhoTela, 
    capacidadeBateria,
    ligar(){
      console.log("Fazendo ligação...")
    }
  }
}
const celular1 = criarCelular('MotoG', 5.5, 5000);
const celular2 = criarCelular('Iphone11', 5.5, 10000);

