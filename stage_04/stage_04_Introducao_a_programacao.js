/*
function sayMyName(name) {
  if(name === '' || !name )
    throw new Error('Nome necessario');

  console.log(name);
}

try {
  //sayMyName();
}
catch(e) {
  console.log(e);
}
*/
/*
  Encontre a solucao ao problema:

  Pergunte o nome do usuario e escreva a mensagem:
  "Ola, [nome do usuario]"

  let name = prompt('Digite seu nome:');
  console.log(`Ola, ${name}`)

*/
/*
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário

  let sum = (n1, n2) => n1 + n2;

  let n1 = prompt('n1: ');
  let n2 = prompt('n2: ');

  console.log(n1, n2, sum(Number(n1), Number(n2)));

*/
/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.

let n1 = Number(prompt('n1: '));
let n2 = Number(prompt('n2: '));

console.log(`Soma: ${n1 + n2}`);
console.log(`Subtracao: ${n1 - n2}`);
console.log(`Multiplicacao: ${n1 * n2}`);
console.log(`Divisao: ${n1 / n2}`);
console.log(`Resto: ${n1 % n2}`);

*/
/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

let name = prompt('Nome do aluno: ');
let n1 = Number(prompt('Nota 1: '));
let n2 = Number(prompt('Nota 2: '));
let n3 = Number(prompt('Nota 3: '));

let average = (( n1 + n2 + n3 ) / 3).toFixed(2);

if(average >= 6)
  console.log(`Parabens ${name} sua media e: ${average}`);
else 
  console.log(`Eita ${name} nao foi dessa vez, mais sorte na recuperacao. Sua media foi: ${average}`);
  
*/
/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
 
  let lista = [];

  for(let i = 1; i <= 10; i++ )
    lista.push(prompt(`Item ${i}: `));

  console.log(lista.join(', '));
  alert(lista);

*/
/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas

  let number = Number(prompt('Advinhe o número que estou pensando? Está entre 0 e 10'));
  let randomNumber = Math.round(Math.random() * 10);
  let attempts = 1;

  while(number != randomNumber){
    number = Number(prompt('Erro, tente novamente: '));
    attempts++;
  }

  console.log(`Parabéns! Você advinhou o número em ${attempts} tentativas.`)

*/

