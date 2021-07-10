//criar um metodo para ler propriedades de um objeto
//exibir somentes as propriedades do tipo string que estão nesse objeto

const pessoa = { //criar objeto
  nome: 'Gustavo',
  idade: 45,
  profissao: 'Desenvolvedor',
  cidade: 'João Pessoa'
}
exibirPropriedade(pessoa)
function exibirPropriedade(){
  for (prop in pessoa){
      if (typeof pessoa[prop] === 'string'){
        console.log(prop, pessoa[prop]);
      } 
  }
}