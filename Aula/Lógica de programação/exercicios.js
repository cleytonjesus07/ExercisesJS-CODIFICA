const prompt = require("prompt-sync")();
//Escreva um algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit
/*


let celsius = Number(prompt("Informe a temperatura em graus Celsius: "));

let fahrenheit = (celsius * 1.8) + 32;

console.log("Temperatura em Fahrenheit: ", fahrenheit); */

//--------------------------------------------------

//Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válido. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores

/* let eleitores = Number(prompt("Quantos eleitores: "));
let qtndNulo = 0, qtndBranco = 0, qtndValido = 0;

console.log(`
0-Nulo
1-Branco
2-Válido
`)

for (let i = 0; i < eleitores; i++) {
    let voto = Number(prompt("Seu voto: "));
    switch (voto) {
        case 0:
            qtndNulo++;
            break;
        case 1:
            qtndBranco++;
            break;
        case 2:
            qtndValido++;
            break;
        default:
            throw Error("Voto inválido")
    }
}

let percentualNulo = (qtndNulo / eleitores) * 100;
let percentualBranco = (qtndBranco / eleitores) * 100;
let percentualValido = (qtndValido / eleitores) * 100;

console.log(`
    RESULTADO:

    Total de eleitores:${eleitores}

    Nulo: Total de votos: ${qtndNulo} - ${percentualNulo}%
    Branco: Total de votos: ${qtndBranco} - ${percentualBranco}%
    Válido: Total de votos: ${qtndValido} - ${percentualValido}%
`) */

//-----------------------------------------------------------------------

//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

/* let turmaC = 60, turmaD = 20;

let percentualReprovadosTurmaC = Number(prompt("Percentual de reprovados da turma C: "));
let percentualAprovadosTurmaD = Number(prompt("Percentual de aprovados da turmaD: "));

let reprovadosTurmaC = (percentualReprovadosTurmaC / 100) * turmaC;
let reprovadosTurmaD = ((percentualAprovadosTurmaD / 100) * turmaD) - turmaD;
let totalDeAlunos = turmaC + turmaD;

console.log(`
Quantidade de Alunos reprovados na turma C: ${(percentualReprovadosTurmaC * turmaC) / 100};

Quantidade de Alunos aprovados na turma D: ${(percentualAprovadosTurmaD / 100) * turmaD};

Percentual de alunos reprovados em relação ao total de alunos das duas turmas: ${((reprovadosTurmaC + reprovadosTurmaD) / totalDeAlunos) * 100}
`) */

//-----------------------------------------------------------------------

//Faça um programa que leia o dia da semana(Domingo,Segunda, Terça,Quarta,Quinta,Sexta e Sábado). Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir "Final de Semana" senão imprimir "dia útil";

/* console.log(`
Escolha um dia da semana:

SEGUNDA
TERÇA
QUARTA
QUINTA
SEXTA
SÁBADO
DOMINGO
`)

let semana = prompt("Diga um dia da semana: ").toLowerCase();
let ehDiaUtil;
switch (semana) {
    case "segunda":
        ehDiaUtil = true;
        break;
    case "terça":
        ehDiaUtil = true;
        break;
    case "quarta":
        ehDiaUtil = true;
        break;
    case "quinta":
        ehDiaUtil = true;
        break;
    case "sexta":
        ehDiaUtil = true;
        break;
    case "sábado" || "sabado":
        ehDiaUtil = false;
        break;
    case "domingo":
        ehDiaUtil = false;
        break;
    default:
        throw Error("Dia da semana inválido!");
}

console.log(ehDiaUtil ? "Dia útil" : "Final de Semana"); */

//-----------------------------------------------------------------------

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

/* let numero;
do {
    numero = Number(prompt("Digite um número: "));
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo")
    }
} while (numero !== 0); */

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.

/* let senha = 2807, senhaDigitada;

while (true) {
    senhaDigitada = Number(prompt("Digite uma senha: "));
    if (senhaDigitada !== senha) {
        console.log("SENHA INVÁLIDA");
    } else {
        console.log("ACESSO PERMITIDO");
        break;
    }
}
 */
