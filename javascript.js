// Exercício 1 : Par ou Impar
let num = 17;

if (num % 2 == 0) {
    console.log("Par");
} else {
    console.log("Impar");
}

//------------------------------------------------------------------

//Exercício 2 : Maior entre três números

let num1 = 35, num2 = 35, num3 = 5;
console.log("Dentre os três números apresentados:\n");
if (num1 > num2 && num1 > num3) {
    console.log("O maior número é o:", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é o:", num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("O maior número é o:", num2);
} else {
    console.log("Dos números apresentados, todos números são iguais ou há empate entre dois ou mais números.");
}

//------------------------------------------------------------------

//Exercicio 3: façam uma calculadora simples utilizando entrada de usuário;
console.log("\n\nCALCULADORA SIMPLES")
const prompt = require("prompt-sync")();

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
        resultado = entrada1 / entrada2;
        break;
    default:
        console.log("Houve algum erro;")
        break;
}

console.log(`Resultado da sua conta: ${resultado}`);
