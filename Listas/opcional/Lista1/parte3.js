const prompt = require("prompt-sync")();

console.log("----EXERCICIOS - LISTA 2(Parte 3)----")

/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

function pesoIdeal(genero, altura) {
    if (typeof genero === "undefined") throw new Error("Você não passou um gênero(M/F)");
    if (typeof altura === "undefined") throw new Error("Você não forneceu uma altura");
    let pesoIdeal = 0.00;
    switch (genero.toUpperCase()) {
        case 'M':
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case 'F':
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            throw new Error("Genêro inválido");
    }

    console.log(`O peso ideal(${genero.toUpperCase() === "M" ? "Masculino" : "Feminino"}) é: ${pesoIdeal.toFixed(2)} Kg`);
}

pesoIdeal("f", 1.78);

//-----------------------------------------------------------------------

/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

console.log("\nEXERCICIO 22\n");

function pesquisaPrefeitura() {
    let dados = [], salario, filhos, contadorAte350 = 0;

    while ((salario = parseFloat(prompt("Salário (ou -1 para sair):"))) !== -1) {
        filhos = parseInt(prompt("Número de filhos:"));
        dados.push({ salario, filhos });
        if (salario <= 350) contadorAte350++;
    }

    if (!dados.length) return "Nenhum dado inserido.";

    const totalPessoas = dados.length;
    const mediaSalario = dados.reduce((sum, { salario }) => sum + salario, 0) / totalPessoas;
    const mediaFilhos = dados.reduce((sum, { filhos }) => sum + filhos, 0) / totalPessoas;
    const maiorSalario = Math.max(...dados.map(p => p.salario));
    const percentualAte350 = (contadorAte350 / totalPessoas * 100).toFixed(2) + "%";

    return { mediaSalario, mediaFilhos, maiorSalario, percentualAte350 };
}


const { mediaSalario, mediaFilhos, maiorSalario, percentualAte350 } = pesquisaPrefeitura();
console.log(`
Média salarial: R$ ${mediaSalario?.toFixed(2)}
Média de filhos: ${mediaFilhos?.toFixed(1)}
Maior salário: R$ ${maiorSalario?.toFixed(2)}
Percentual ≤ R$ 350,00: ${percentualAte350}
`);

//-----------------------------------------------------------------------

/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

console.log("\nEXERCICIO 23\n");

function criarMatrizIdentidade(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = i === j ? 1 : 0;
        }
    }
    return matriz;
}

const MI = criarMatrizIdentidade(7);
console.log("Matriz Identidade 7x7:");
for (let linha of MI) {
    console.log(linha.join(" "));
}

//-----------------------------------------------------------------------

/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

console.log("\nEXERCICIO 24\n");


const M24 = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [0, -1, -2, -3, -4, -5, -6, -7],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, -1]
];

const C = M24.map(linha => {
    return linha.filter(elemento => elemento < 0).length;
});


console.log("Matriz M:");
M24.forEach(linha => console.log(linha.map(n => n < 0 ? `(${n})` : n).join("\t")));

console.log("\nVetor C (quantidade de negativos por linha):");
console.log(C);

//-----------------------------------------------------------------------

/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.

*/

console.log("\nEXERCICIO 25\n");

function somarColunas(matriz) {
    const numLinhas = matriz.length;
    const numColunas = matriz[0].length;
    const somasColunas = new Array(numColunas).fill(0);

    for (let col = 0; col < numColunas; col++) {
        for (let lin = 0; lin < numLinhas; lin++) {

            const valor = Number(matriz[lin][col]);
            somasColunas[col] += valor;
        }

        somasColunas[col] = Number(somasColunas[col].toFixed(2));
    }

    return somasColunas;
}


const matriz = Array.from({ length: 15 }, () =>
    Array.from({ length: 20 }, () => (Math.random() * 10 - 5).toFixed(2))
);


const somas = somarColunas(matriz);
console.log("Soma de cada coluna:");
console.table(matriz)
somas.forEach((soma, index) => {
    console.log(`Coluna ${index + 1}: ${soma}`);
});

//-----------------------------------------------------------------------

/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

console.log("\nEXERCICIO 26\n");

const A26 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

const B = [
    [1, 0, 2, 0, 3],
    [0, 1, 0, 2, 0],
    [3, 0, 4, 0, 5]
];

const P = [[], [], []];


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        P[i][j] = A26[i][j] * B[i][j];
    }
}


console.log("Matriz Produto P:");
for (let i = 0; i < 3; i++) {
    console.log(P[i].join("\t"));
}

//-----------------------------------------------------------------------

/* 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

console.log("\nEXERCICIO 27\n");

const M = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

const A = Number(prompt("Digite o valor de A: "));

const V = new Array(36);
let index = 0;


for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V[index] = M[i][j] * A;
        index++;
    }
}

console.log("Vetor V resultante:");
console.log(V.join(", "));

//-----------------------------------------------------------------------

/* 
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

console.log("\nEXERCICIO 28\n");
const matrizExemplo = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
];

if (matrizExemplo.length !== 10 || matrizExemplo[0].length !== 10) {
    throw new Error("A matriz deve ser 10x10");
}

let somaAcima = 0;
let somaAbaixo = 0;


for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i < j) {

            somaAcima += matrizExemplo[i][j];
        } else if (i > j) {

            somaAbaixo += matrizExemplo[i][j];
        }

    }
}

const resultados = {
    somaAcimaDiagonal: somaAcima,
    somaAbaixoDiagonal: somaAbaixo
};



console.log("Soma dos elementos acima da diagonal principal:", resultados.somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal:", resultados.somaAbaixoDiagonal);

//-----------------------------------------------------------------------

/* 
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

console.log("\nEXERCICIO 29\n");

function calcularSomasMatriz() {
    const M = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];


    let somaLinha4 = 0;
    for (let j = 0; j < 5; j++) {
        somaLinha4 += M[3][j];
    }


    let somaColuna2 = 0;
    for (let i = 0; i < 5; i++) {
        somaColuna2 += M[i][1];
    }


    let somaDiagonal = 0;
    for (let i = 0; i < 5; i++) {
        somaDiagonal += M[i][i];
    }


    let somaTotal = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            somaTotal += M[i][j];
        }
    }


    console.log("Matriz M:");
    for (let i = 0; i < 5; i++) {
        console.log(M[i].join("\t"));
    }

    console.log("\nResultados:");
    console.log("a) Soma da linha 4: ", somaLinha4);
    console.log("b) Soma da coluna 2: ", somaColuna2);
    console.log("c) Soma da diagonal principal: ", somaDiagonal);
    console.log("d) Soma de todos elementos: ", somaTotal);
}


calcularSomasMatriz();

//-----------------------------------------------------------------------

/* 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */
console.log("\nEXERCICIO 30\n");

function calcularSomasLinhasColunas() {
    const M = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];


    const SL = new Array(5).fill(0);


    const SC = new Array(5).fill(0);


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            SL[i] += M[i][j]; // Soma da linha i
            SC[j] += M[i][j]; // Soma da coluna j
        }
    }


    console.log("Matriz M:");
    for (let i = 0; i < 5; i++) {
        console.log(M[i].join("\t"));
    }

    console.log("\nVetor SL (somas das linhas):", SL);
    console.log("Vetor SC (somas das colunas):", SC);
}


calcularSomasLinhasColunas();