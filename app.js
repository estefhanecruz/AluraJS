alert('Boas vindas ao jogo do número secreto');
// A variável numeroSecreto recebe o retorno da função getRandomInt
let numeroSecreto = getRandomInt();
let minimo = 1;
let maximo = 100;

//A função getRandomInt retorna um número inteiro entre dois valores definidos
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
  }
console.log("O número secreto é "+numeroSecreto)
let chute;
let tentativas = 1;

    //Loop para reiniciar a tentativa do user a cada vez que ele erra
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${minimo} e ${maximo}`);
    console.log(`Peguei o número ${chute}`);
    // O código só roda se o chute for um número entre 1 e 100. Caso contrário cai na mensagem de erro
    if (chute>=1&&chute<=100){
        if (chute == numeroSecreto) {
            break;
         } else {
             if (chute > numeroSecreto) {
                 console.log(`O usuário escolheu um numero maior que ${numeroSecreto}`);
                 alert(`O número secreto é menor que ${chute}`);
             } else {
                 console.log(`O usuário escolheu um numero menor que ${numeroSecreto}`);
                 alert(`O número secreto é maior que ${chute}`);
             }
             // tentativas = tentativas + 1 - Incremento
             tentativas++
         }
    } else{
        alert(`Entrada inválida! Você deve escolher um número entre 1 e 100`);
    }
}
// O que acontece quando o user acerta

console.log(`O usuário acertou depois de ${tentativas} tentativa(s)`)
/* Esta operação com operadores ternarios serve para mudar a palavra "tentativa" 
para "tentativas", caso o número de tentativas seja superior a 1*/
let palavraTentativa = tentativas>1? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)



/*A mesma operação acima, só que com if e else em vez de operadores ternários*/

// if (tentativas>1){
//     alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
// }else{
//         alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//     }