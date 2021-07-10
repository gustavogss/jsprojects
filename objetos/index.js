/** Manipulação de objetos 
 * no JavaScript Dinamicamente
 */

const mouse = {
  cor: 'branco',
  marca: "multilaser"
}
console.log(mouse);
mouse.velocidade = 5000; //adcionando um objeto com um valor
console.log(mouse); //cor: 'branco', marca: 'multilaser', velocidade: 5000

mouse.trocarDPI = function(){ //adicionando um método
  console.log('mudando DPI...')
}
console.log(mouse);

delete mouse.trocarDPI; //deletar um método
delete mouse.cor; //deletar um objeto

console.log(mouse); //marca: 'multilaser', velocidade: 5000 