let number1 = Number(prompt('Digite um numero: '));
let number2 = Number(prompt('Digite outro numero: '));

const calc = {
  sum: [
    'soma',
    (n1, n2) => n1 + n2
  ],
  sub: [
    'subtracao',
    (n1, n2) => n1 - n2
  ],
  mul: [ 
    'multiplicacao',
    (n1, n2) => n1 * n2
  ],
  div: [
    'divisao',
    (n1, n2) => n1 / n2
  ],
  res: [
    'resto da divisao',
    (n1, n2) => n1 % n2
  ]
}

let evenOrOdd = (n1, n2) => (n1 + n2) % 2 === 0 ? 'par' : 'impar';
let iquals = number1 === number2 ? 'sao iguais' : 'nao sao iguais';

for(let operation of Object.keys(calc))
  alert(`A ${calc[operation][0]} dos dois numeros e: ${calc[operation][1](number1, number2)}`);

alert(`A soma de ${number1} + ${number2} e ${evenOrOdd(number1, number2)}`);
alert(`Os numeros ${number1} e ${number2} ${iquals}`);

