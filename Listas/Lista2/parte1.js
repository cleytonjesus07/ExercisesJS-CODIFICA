const prompt = require("prompt-sync")();

console.log("----EXERCICIOS - LISTA 2(Parte 1)----")

/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */
console.log("EXERCÍCIO 1\n");
let qtndCigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia?: "));
let qntsAnosFumando = Number(prompt("Quantos anos você já fumou?: "));

let totalDeCigarros = qtndCigarrosPorDia * 365 * qntsAnosFumando;
let minutosPerdidos = totalDeCigarros * 10;
let diasPerdidos = minutosPerdidos / (24 * 60)

console.log(`Você já perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida devido ao fumo`);

/* --------------------------------------------------------------- */
/* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h
-1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */
console.log("\nEXERCÍCIO 2\n");
let velocidade = Number(prompt("Forneça a velocidade(km/h) do veículo: "));
const limitePermitido = 80, cobrancaMulta = 5.00;

if (velocidade > limitePermitido) {
    let excesso = velocidade - limitePermitido;
    let multa = excesso * cobrancaMulta;

    console.log(`
        _________________________________________________________________
         🚨🚨🚨 Opá! Você foi multado por excesso de velocidade: 🚨🚨🚨

         🚓🚓🚓 Velocidade registrada:${velocidade} Km/h 🚓🚓🚓

         👮‍♂️👮‍♂️👮‍♂️ Excesso:${excesso.toFixed(1)} Km/h 👮‍♂️👮‍♂️👮‍♂️

         👮‍♂️👮‍♂️👮‍♂️ Valor da multa: R$ ${multa.toFixed(2)} 👮‍♂️👮‍♂️👮‍♂️
         ________________________________________________________________
        `)
} else {
    console.log("Você está dentro do limite.");
}

/* --------------------------------------------------------------- */

/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */
console.log("\nEXERCÍCIO 3\n");
let distancia = Number(prompt("Quantos Km você deseja percorrer: ")),
    cobranca = 0.00;

if (distancia <= 200) {
    cobranca = distancia * 0.50;
} else {
    cobranca = distancia * 0.45;
}

console.log(`
PREÇO DA PASSAGEM: R$ ${cobranca.toFixed(2)};
`);

/* --------------------------------------------------------------- */

/* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */
console.log("\nEXERCÍCIO 4\n");
let segmentoA = Number(prompt("Digite o valor do segmento A: "));
let segmentoB = Number(prompt("Digite o valor do segmento B: "));
let segmentoC = Number(prompt("Digite o valor do segmento C: "));

if (segmentoA < (segmentoB + segmentoC) && segmentoB < (segmentoA + segmentoC) && segmentoC < (segmentoA + segmentoB)) {
    console.log("Pode formar um triângulo!")
} else {
    console.log("Não existe nenhuma possibilidade de formar um triângulo com esses segmentos fornecidos.")
}

/* --------------------------------------------------------------- */

//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
console.log("\nEXERCÍCIO 5\n");
let opcoes = [
    {
        emote: "✊",
        name: "pedra",
        weakness: "papel"
    },
    {
        emote: "✋",
        name: "papel",
        weakness: "tesoura"
    }, {
        emote: "✌️",
        name: "tesoura",
        weakness: "pedra"
    }],
    continuar = true,
    player = undefined,
    cpu = undefined;

console.log("----BEM-VINDO ao game JOKENPO!!!(✊,✋,✌️)----")

do {

    console.log(`
        1 - PEDRA(✊)
        2 - PAPEL(✋)
        3 - TESOURA(✌️)
        4 - SAIR
       `)

    let escolha = Number(prompt("Escolha uma das opções: "));


    if (escolha === 4) {
        console.log("Muito obrigado por ter jogado!!! :)")
        break;
    }

    switch (escolha) {
        case 1:
            player = opcoes[(escolha - 1)];
            cpu = opcoes[Math.floor(Math.random() * opcoes.length)];

            break;
        case 2:
            player = opcoes[(escolha - 1)];
            cpu = opcoes[Math.floor(Math.random() * opcoes.length)];
            break;
        case 3:
            player = opcoes[(escolha - 1)];
            cpu = opcoes[Math.floor(Math.random() * opcoes.length)];
            break;
        default:
            console.log("Escolha inválida!!! Tente novamente!")
            break;
    }

    console.log(`
    ---- RESULTADO ----
    ESCOLHAS:

    VOCÊ => ${player.emote} - (${player.name})
    CPU => ${cpu.emote} - (${cpu.name})
    `)

    if (player.name === cpu.weakness) {
        console.log("Você venceu!!!");
    } else if (cpu.name === player.weakness) {
        console.log("Você perdeu!!!");
    } else {
        console.log("Empatou!!!");
    }

} while (continuar);

/* --------------------------------------------------------------- */

/* 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */
console.log("\nEXERCÍCIO 6\n");
console.log("---- ADIVINHE O NÚMERO ----");
let cpuChoice = Math.floor(Math.random() * 5) + 1;
do {
    console.log("- Adivinhe o número que pensei entre 1 e 5(digite '0'  para sair) ? -");
    let yourChoice = Number(prompt("Forneça o número: "));

    if (yourChoice === 0) {
        console.log("Muito obrigado por jogar!!!");
        break;
    }


    if (yourChoice > 0 && yourChoice <= 5) {
        if (yourChoice < cpuChoice) {
            console.log("Dica: O número é maior!");
        } else if (yourChoice > cpuChoice) {
            console.log("Dica: O número é menor!");
        } else {
            console.log("Parabéns!!! Você acertou!");
            console.log(`
                ---- RESULTADO ----
                VOCÊ => ${yourChoice}
                CPU => ${cpuChoice}
            `)
        }
    } else {
        console.log("Valor inválido!")
    }
} while (true);

//-----------------------------------------------------------------------
/* 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */
console.log("\nEXERCÍCIO 7\n");
do {
    let valorKm = 0.00, valorCarroPorDias = 0.00;
    console.log(
        `
    Escolha um dos tipos de carros disponíveis:

    1 - Popular
    2 - Luxo
        `);
    let tipoDeCarro = Number(prompt("Escolha o tipo de carro: "));
    if (tipoDeCarro == 0) {
        console.log("Muito obrigado por utilizar os nossos serviços! :)")
        break;
    }
    let diasDeAluguel = Number(prompt("Quantos dias de aluguel: "));
    let km = Number(prompt("Quantos Km/h percorrido: "));

    switch (tipoDeCarro) {
        case 1:
            valorCarroPorDias = 90.00 * diasDeAluguel;
            if (km <= 100) {
                valorKm = km * 0.20;
                valorCarroPorDias += valorKm;
            } else {
                valorKm = km * 0.10;
                valorCarroPorDias += valorKm;
            }
            console.log(`
                ---- RESULTADO ----
                Carros populares
                    - Até 100 Km percorridos: R$ 0,20 por Km
                    - Acima de 100 Km percorridos: R$ 0,10 por Km
                Carros de luxo
                    - Até 200 Km percorridos: R$ 0,30 por Km
                    - Acima de 200 Km percorridos: R$ 0,25 por Km
                -----------------------------------------------------
                PREÇO: R$${valorCarroPorDias.toFixed(2)}
                `)
            break;
        case 2:
            valorCarroPorDias = 150.00 * diasDeAluguel;
            if (km <= 200) {
                valorKm = km * 0.30;
                valorCarroPorDias += valorKm;
            } else {
                valorKm = km * 0.25;
                valorCarroPorDias += valorKm;
            }
            console.log(`
                ---- RESULTADO ----
                Carros populares
                    - Até 100 Km percorridos: R$ 0,20 por Km
                    - Acima de 100 Km percorridos: R$ 0,10 por Km
                Carros de luxo
                    - Até 200 Km percorridos: R$ 0,30 por Km
                    - Acima de 200 Km percorridos: R$ 0,25 por Km
                -----------------------------------------------------
                PREÇO: R$${valorCarroPorDias.toFixed(2)}
                `)
            break;
        default:
            console.log("Valores inválidos!")
            break;
    }
} while (true);

//-------------------------------------------------------------------------

/* 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

console.log("\nEXERCÍCIO 8\n");
let horasDeAtividades = Number(prompt("Digite a quantidade de horas de atividade física no mês: ")), pontos = 0;

if (horasDeAtividades <= 10) {
    pontos = horasDeAtividades * 2;
} else if (horasDeAtividades <= 20) {
    pontos = 10 * 2 + (horasDeAtividades - 10) * 5;
} else {
    pontos = 10 * 2 + 10 * 5 + (horasDeAtividades - 20) * 10;
}

let dinheiro = pontos * 0.05;

console.log(`
    ---- RESULTADO ----

    Total de pontos ganhos: ${pontos.toFixed(0)} pontos
    Valor em dinheiro: R$${dinheiro.toFixed(2)}
`)

//-------------------------------------------------------------------------

/* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */
console.log("\nEXERCÍCIO 9\n");
console.log("---- CADASTRO DE FUNCIONÁRIOS ----");
let salarioMan = 0.00, salarioWoman = 0.00;
do {
    let genero = prompt("Forneça o gênero(M/F): ");
    let salario = Number(prompt("Forneça o salário: "));
    if (genero.toLowerCase() === "f") {
        salarioWoman += salario;
    } else {
        salarioMan += salario;
    }

    let progredir = prompt("Deseja continuar(S/N): ");

    if (progredir.toLowerCase() === "n") {
        console.log(`
           --- TOTAL DE SALÁRIO ---
           HOMENS => R$ ${salarioMan.toFixed(2)}
           MULHERES => R$ ${salarioWoman.toFixed(2)}
        `)
        break;
    }
} while (true);

//-------------------------------------------------------------------------

/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: */
console.log("\nEXERCÍCIO 10\n");
let numeros = [];
do {
    let num;
    while (true) {
        num = Number(prompt("Digite um número: "));
        if (!isNaN(num)) {
            break;
        }
        console.log("Por favor, digite um número válido!");
    }
    numeros.push(num);
    let desejaContinuar = prompt("Deseja continuar(S/N): ");
    if (desejaContinuar.toLowerCase() == "n") {
        let total = numeros.reduce((a, b) => a + b);
        let pares = 0;
        numeros.forEach(num => {
            if (num % 2 === 0) {
                pares++;
            }
        });
        console.log(`
         ---- RESULTADO ----
         
         Soma de todos os valores = ${total}
         Menor valor digitado = ${Math.min(...numeros)}
         A média entre os valores = ${total / numeros.length}
         Quantidade de valores que são pares = ${pares}
        `)
        break;
    }
} while (true);