/*** Manipulando Arrays: Inserção de elementos,
 * Busca, Remoção, Divisão, Combinação
 */

//Adicão de Elementos na Lista
const numeros = [1,2,3]; //array
numeros.unshift(0); //adiciona 0 no inico da lista
numeros.splice(1,0,'a'); //adicionar no indice 1 a letra a. 
numeros.push(5);//adiciona 5 no final da lista
console.log(numeros); //[ 0, 'a', 1, 2, 3, 5 ]

//Busca de Elementos na lista
const vogais = ['a','e','i','o','u', 'i'];
console.log (vogais.indexOf('i')); //retorna o numero do indice de i, se não achar nada retorna -1
console.log (vogais.lastIndexOf('i')); //retorna o indice da última ocorrência de i
console.log(vogais.includes('i')); //verifica se i existe na lista

//Busca de Elementos por referência
const veiculos = [
  {id:1, nome: 'fusca', ano: 1977},
  {id:2, nome: 'gol', ano: 2000},
  {id:3, nome: 'fiat', ano: 1998},
];
const veiculo = veiculos.find(function(veiculo){
  return veiculo.nome === 'fusca';
});
console.log(veiculo); //verificar se fusca está na lista de veiculos

//Remover Elementos
const diasSemana = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
console.log(diasSemana.pop()); //remove o último elemento da lista domingo
console.log(diasSemana); //'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'
console.log(diasSemana.shift()); //remove o primeiro elemento da lista segunda
console.log(diasSemana); //'terça', 'quarta', 'quinta', 'sexta', 'sábado' 
console.log(diasSemana.splice(2,1)); //remove 1 elemento no indice 2
console.log(diasSemana);//'terça', 'quarta', 'sexta', 'sábado'
console.log(diasSemana.splice(0,diasSemana.length)); //Apaga todos os elementos do array
console.log(diasSemana);

//Dividir e Combinar Arrays
const primeiro = [1,2,3];
const segundo = [4,5,6];

var combinado = (primeiro.concat(segundo));//combina as listas 
console.log(combinado);//1, 2, 3, 4, 5, 6
var dividido = combinado.slice(1,3); //divide a lista  da posição 1 a 3 -1
console.log(dividido); //2, 3

//Combinado arrays com o operador spread ...
var juntando = [...primeiro,'a',...segundo];
console.log(juntando);//1, 2, 3, 'a', 4, 5, 6