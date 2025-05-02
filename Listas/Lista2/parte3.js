const prompt = require("prompt-sync")();

console.log("----EXERCICIOS - LISTA 2(Parte 3)----")

/* 
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

/* function pesoIdeal(genero, altura) {
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

pesoIdeal("f", 1.78); */

//-----------------------------------------------------------------------

/* 
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

/* console.log("\nEXERCICIO 22\n");

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
Média salarial: R$ ${mediaSalario.toFixed(2)}
Média de filhos: ${mediaFilhos.toFixed(1)}
Maior salário: R$ ${maiorSalario.toFixed(2)}
Percentual ≤ R$ 350,00: ${percentualAte350}
`); */

//-----------------------------------------------------------------------

/* 
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

/* console.log("\nEXERCICIO 23\n");

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
} */

//-----------------------------------------------------------------------

/* 
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

/* console.log("\nEXERCICIO 24\n");


const M = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [0, -1, -2, -3, -4, -5, -6, -7],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, -1]
];

const C = M.map(linha => {
    return linha.filter(elemento => elemento < 0).length;
});


console.log("Matriz M:");
M.forEach(linha => console.log(linha.map(n => n < 0 ? `(${n})` : n).join("\t")));

console.log("\nVetor C (quantidade de negativos por linha):");
console.log(C); */

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
            // Converte para número se for string
            const valor = Number(matriz[lin][col]);
            somasColunas[col] += valor;
        }
        // Garante que é número antes de usar toFixed
        somasColunas[col] = Number(somasColunas[col].toFixed(2));
    }

    return somasColunas;
}

// Matriz de exemplo 15x20 com números reais
const matriz = Array.from({ length: 15 }, () =>
    Array.from({ length: 20 }, () => (Math.random() * 10 - 5).toFixed(2))
);

// Calcular e mostrar as somas
const somas = somarColunas(matriz);
console.log("Soma de cada coluna:");
console.table(matriz)
somas.forEach((soma, index) => {
    console.log(`Coluna ${index + 1}: ${soma}`); // Já está formatado
});