/**
 * Manipulando Strings
 */
const mensagem = ' Minha primeira mensagem ';
console.log(mensagem.includes('primeira')); //Verifica se a frase primeira está na mensagem
console.log (mensagem.startsWith('Minha')); //Verifica se a mensagem começa com Minha
console.log (mensagem.endsWith('mensagem'));//Verifica se a mensagem termina com mensagem
console.log (mensagem.indexOf('mensagem'));// Vê qual é o indice da palavra mensagem
console.log (mensagem.replace('Minha', 'Sua'));//Troca a palavra Minha por Sua
console.log (mensagem.trim());//Retira os espaços vazios do inicio e final da mensagem
console.log (mensagem.split(' '));//Quebra a mensagem em objetos