// Exercício 1 : Par ou Impar
/* let num = 17;

if (num % 2 == 0) {
    console.log("Par");
} else {
    console.log("Impar");
} */

//------------------------------------------------------------------

//Exercício 2 : Maior entre três números

/* let num1 = 35, num2 = 35, num3 = 5;
console.log("Dentre os três números apresentados:\n");
if (num1 > num2 && num1 > num3) {
    console.log("O maior número é o:", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é o:", num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("O maior número é o:", num2);
} else {
    console.log(" Todos números são iguais ou há empate entre dois ou mais números.");
} */

//------------------------------------------------------------------
const prompt = require("prompt-sync")();
//Exercicio 3: façam uma calculadora simples utilizando entrada de usuário;
/* console.log("\n\nCALCULADORA SIMPLES")


let entrada1 = parseInt(prompt("Insira o primeiro número:")),
    entrada2 = parseInt(prompt("Insira o segundo número:")),
    resultado = null;

console.log(`
Escolha uma das operações disponíveis:
1 - (+)
2 - (-)
3 - (x)
4 - (÷)
    \n
`);

let operacao = parseInt(prompt("Escolha uma opção:"));
switch (operacao) {
    case 1:
        resultado = entrada1 + entrada2;
        break;
    case 2:
        resultado = entrada1 - entrada2;
        break;
    case 3:
        resultado = entrada1 * entrada2;
        break;
    case 4:
        if (entrada2 === 0) {
            throw new Error("Não pode dividir por 0");
        }
        resultado = entrada1 / entrada2;
        break;
    default:
        console.log("Houve algum erro;")
        break;
}

console.log(`Resultado da sua conta: ${resultado}`); */
//------------------------------------------------------------------

//Exercício 4: Verificar se um número é positivo, negativo ou zero

/* let numero = Number(prompt("Insira um número para que eu diga se é negativo ou positivo: "));

if (numero < 0) {
    console.log("O número digitado é negativo");
} else if (numero === 0) {
    console.log("O número digitado é 0");
} else {
    console.log("O número digitado é positivo");
} */

//------------------------------------------------------------------


//Exercício 5: Verificar se um ano é bissexto
/* let ano = Number(prompt("Forneça um ano do calendário: "));

if ((ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0)) {
    console.log("É Bissexto!");
} else {
    console.log("Não é bissexto!");
}
 */
//------------------------------------------------------------------

//Exercício 6: Definam faixas etárias par crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

/* let idade = Number(prompt("Forneça uma idade: "));

switch (true) {
    case (idade < 12):
        console.log("Idade de criança");
        break;
    case (idade >= 12 && idade < 18):
        console.log("Idade de adolescente");
        break;
    default:
        console.log("Idade de adulto");
} */
//------------------------------------------------------------------

/* console.log("--TABUADA SIMULATOR--\n")
let numero = Number(prompt("Digite um número para ver a sua tabuada: "));
let count = 0;
if (isNaN(numero)) throw new Error("Valor inválido!");
while (count <= 10) {
    console.log(`${numero} X ${count} = ${numero * count}`);
    count++
} */
//------------------------------------------------------------------

// Contagem regressiva

/* let count = 10;

while (count > 0) {
    console.log(count--);
}; */

//------------------------------------------------------------------

// Façam a média aritmética de números inseridos até que o usuário digite 0.

/* console.log("--MÉDIA ARITMÉTICA--");

let numero = null, acc = 0, count = 0;

while (numero !== 0) {
    numero = Number(prompt(`Digite a sua ${count + 1}° nota: `));
    if (numero === 0) break;
    acc += numero;
    count++;
}
console.log(`A média aritmética dos números inseridos foi: ${(acc / count).toFixed(1)}`); */