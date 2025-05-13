const prompt = require("prompt-sync")();
console.log("---LISTA DE EXERCÍCIOS---\n");
/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

console.log("Exercício 1: ")
let number = Number(prompt("Digite um número: "));

if (number % 2 == 0) {
    console.log(`O número escolhido (${number}) é par.`);
} else {
    console.log(`O número escolhido (${number}) é impar.`);
}
console.log("-------------------------\n");

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

console.log("Exercício 2: ");

let idade = Number(prompt("Digite uma idade: "));

if (idade >= 60) {
    console.log("Idoso");
} else if (idade >= 20) {
    console.log("Adulto");
} else {
    console.log("Adolescente");
}
console.log("-------------------------\n");



/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

console.log("Exercício 3: ");

let nota = Number(prompt("Forneça uma nota(de 0 a 10): "));
if (nota >= 0 && nota <= 10) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else if (nota === 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
} else {
    throw Error("Valor inválido");
}

console.log("-------------------------\n");

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

console.log("Exercício 4: ");

let saldo = 500.00, continuar = true;

console.log("---BEM-VINDO AO SISTEMA BANCÁRIO---");
while (continuar) {
    console.log(`
        1 - Para depósito
        2 - Para Saque
        3 - Ver saldo
        4 - Sair     
    `);

    let escolha = Number(prompt("Escolha uma das opções sugeridas: "));
    switch (escolha) {
        case 1:
            let deposito = Number(prompt("Digite o valor para depositar: "));
            saldo += deposito;
            break;
        case 2:
            let saque = Number(prompt("Digite o valor para sacar: "));
            if (saque > saldo) throw new Error("O valor fornecido para o saque é maior do que o saldo disponível.");
            saldo -= saque;
            break;
        case 3:
            console.log(`Seu saldo: R$${saldo.toFixed(2)}`);
            break;
        case 4:
            continuar = false;
            break;

        default:
            throw new Error("Escolha inválida")
    }
}

console.log("Muito obrigado por utilizar o nosso sistema bancário! :)");


console.log("-------------------------\n");

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

console.log("Exercício 5: ");

let peso = Number(prompt("Digite seu peso(kg): "));
let altura = Number(prompt("Digite sua altura(m): "));

let imc = peso / (altura ** 2);

if (imc > 40) {
    console.log("Acima do peso");
} else if (imc > 35) {
    console.log("Obesidade grau 2");
} else if (imc > 30) {
    console.log("Obesidade grau 1");
} else if (imc > 25) {
    console.log("Sobrepeso");
} else if (imc > 18.5) {
    console.log("Peso normal(saudável)");
} else {
    console.log("Magreza");
}

console.log("-------------------------\n");



/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

console.log("Exercício 6: ");

let ladoA = Number(prompt("Digite o lado A: "));
let ladoB = Number(prompt("Digite o lado B: "));
let ladoC = Number(prompt("Digite o lado C: "));

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("É um triângulo equilátero");
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log("É um triângulo isósceles");
    } else {
        console.log("É um triângulo escaleno");
    }
} else {
    throw new Error("Não é um triângulo");
}

console.log("-------------------------\n");

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */
console.log("Exercício 7: ");

let quantidade = Number(prompt("Quantidade de maças: ")),
    preco;


if (quantidade < 12) {
    preco = 0.30;
} else {
    preco = 0.25;
}

let total = quantidade * preco;

console.log("Valor total da compra: R$", total.toFixed(2));

console.log("-------------------------\n");

/* 
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

console.log("Exercício 8: ");

let valor1 = Number(prompt("Digite o primeiro valor: ")),
    valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 > valor2) {
    console.log(`Números escolhidos: ${valor2}, ${valor1}`);
} else {
    console.log(`Números escolhidos: ${valor1}, ${valor2}`);
}

console.log("-------------------------\n");
/* 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for. */
console.log("Exercício 9: ");
let index = 10;

while (index >= 0) {
    console.log(index);
    index--;
}

console.log("-------------------------\n");

/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

console.log("Exercício 10: ");

let numero = Number(prompt("Digite um número: "));

for (let index = 0; index < 10; index++) {
    console.log(`${index + 1}° -> ${numero}`);
}

console.log("-------------------------\n");

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

console.log("Exercício 11: ");
let soma = 0, vezes = 0;

do {
    let numero = Number(prompt(`Digite o ${vezes + 1}° valor: `));
    soma += numero;
    vezes++;
} while (vezes < 5);


console.log(`TOTAL: ${soma}`);

console.log("-------------------------\n");

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

console.log("Exercício 12: ");

let numero12 = Number(prompt("Digite um número para ver a sua tabuada: ")),
    vezes12 = 0;

do {
    console.log(`${numero12} X ${vezes12} = ${numero12 * vezes12}`);
    vezes12++;
} while (vezes12 <= 10)

console.log("-------------------------\n");

/* 
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

console.log("Exercício 13: ");

let soma13 = 0, index13 = 0, media;

while (true) {
    let numero = Number(prompt("Digite um número decimal( 0 -> para sair): "));
    if (numero % 2 !== 0) throw new Error("Não é um decimal");
    if (numero == 0) break;
    soma13 += numero;
    index13++;
}
if (index13 == 0) throw new Error("Não existe divisão por zero");
media = soma / index13;
console.log(`Media aritmética: ${media}`);

console.log("-------------------------\n");

/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

console.log("Exercício 14: ");

let numero14 = Number(prompt("Digite um número para ver seu fatorial: ")),
    fatorial = 1;

do {
    fatorial *= numero14;
    numero14--;
} while (numero14 > 1);

console.log(`RESULTADO DO FATORIAL: ${fatorial}`);

console.log("-------------------------\n");

console.log("Exercício 15: ");
/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
    console.log(a);
    b = a + (a = b);
}

console.log("-------------------------\n");