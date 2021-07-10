/**
 * Criar um objeto endereço que contêm:
 * Rua
 * Cidade
 * CEP * 
 */
 var endereco = {
    rua: 'Fulano de Tal',
    cidade: 'Joao Pessoa',
    cep: 58000
  };
function exibirEndereco(endereco){
 for(var i in endereco)
 console.log(i, endereco[i]);  
}
exibirEndereco(endereco);