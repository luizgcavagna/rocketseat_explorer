console.log('Hello World!');
/*
Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/
let number1 = 1//Number(prompt('Digite o primeiro numero: '));
let number2 = 1//Number(prompt('Digite o segundo numero: '));
let sum = (n1, n2) => n1 + n2 ;
console.log(`A soma de ${number1} e ${number2} e: ${sum(number1, number2)}`);

let mensage = (string) => console.log(string);

/*
Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/
let number = 0;
let isNumber = typeof number == 'number' ? 'É um número' : 'Não é um número';
mensage(isNumber);
/*
Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/
let string = 'string';
let isString = typeof string == 'string' ? 'É uma string' : 'Não é uma string';
mensage(isString);

/*
Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/
let boolean = true;
let isBoolean = typeof boolean == 'boolean' ? 'É um booleano' : 'Não é um booleano';
mensage(isBoolean);

/*
Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
*/
let sub = (n1, n2) => n1 - n2 ;
console.log(`A subtracao de ${number1} e ${number2} e: ${sub(number1, number2)}`);

/*
Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/
let mult = (n1, n2) => n1 * n2 ;
console.log(`A multiplicação de ${number1} e ${number2} e: ${mult(number1, number2)}`);

/*
Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/
let div = (n1, n2) => n1 / n2 ;
console.log(`A divisão de ${number1} e ${number2} e: ${div(number1, number2)}`);

/*
Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/
/*
Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
let evenOdd = (n) => (n % 2) == 0 ? 'É um número par' : 'É um número ímpar';
console.log(`O numero ${number1}: ${evenOdd(number1)}`);