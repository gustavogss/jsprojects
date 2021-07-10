/*
* Se hora estiver entre 06 as 12  - Bom Dia
* Se estiver entre 12 as 18:00 - Boa tarde
* Senão boa noite
*/
var hora = 14;
 if(hora>6 && hora<12){
   console.log("Bom dia");
 } else if(hora>12 && hora<18){
   console.log("Boa tarde");
 } else{
   ("Boa noite")
 }