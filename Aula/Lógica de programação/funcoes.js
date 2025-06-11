/* Funções */

/* 2 tipos:

- As que retornam valores
- As que não retornam: chamadas de procedimento.

*/

/* function RetornaParOuImpar(num) {
    return num % 2 === 0 ? "Par" : "Ímpar";
}

console.log(RetornaParOuImpar(2)) */

/* function calcularArea(altura, largura) {
    return altura * largura;
}

console.log(calcularArea(10, 10)) */
/*
function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}
let numsArr = [5, 1, -1, 0, 4, 5];
console.log(ordenarArray(numsArr));
 */

/* function somarArrayElementos(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
function maiorNumeroArray(arr) {
    return Math.max(...arr);
} */

/* console.log(maiorNumeroArray([10, 2, 300])) */


//FUNÇÕES NATIVAS DO JAVASCRIPT


let nome = "Júlio César";

console.log(nome.length); // Quantidade de caracteres de uma string
console.log(nome.charAt(0)); // Retorna a letra
console.log(nome.indexOf("C"));

console.log(nome.replace("Júlio", "Cleyton"));
console.log(nome.substr(6, 5));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log("      Wesley       ".trim());


/* function inverterString(palavra) {
    return palavra.split("").reverse().join("");
}

console.log(inverterString("Jacques")); */

/* function numerosDeVogais(palavra) {
    let vogais = "AEIOU"
    let qtnd = 0;
    vogais.split("").forEach(v => {
        if (palavra.toUpperCase().indexOf(v) !== -1) {
            qtnd += 1;
        }
    })

    return qtnd;
}

console.log(numerosDeVogais("Alfredo")) */

/* console.log(Math.ceil(100.2));
console.log(Math.floor(100.2));
console.log(Math.round(100.2));

console.log(Math.sqrt(81));
console.log(Math.cbrt(81));
console.log(Math.pow(9, 2));

console.log(Math.abs(-100.2));
console.log(Math.floor(Math.random() * 100)) */

/* function numeroAleatorio(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

console.log(numeroAleatorio(0, 2)) */
/* 
let data = new Date();

console.log(data.getDate());
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log(data.toString());
 */

/* let date1 = new Date(2015, 7, 7);
let date2 = new Date(2025, 7, 7);

console.log(date1.getTime());
console.log(date2.getTime());

let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime());

console.log(milissegundosEntreDatas);

let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000);

console.log(`A diferença entre as datas é de: ${milissegundosEntreDatas / milissegundosPorDia}`);
 */

/* function formatarData(data) {
    return data.toLocaleDateString("pt-BR")
}

console.log(formatarData(new Date(1996, 11, 18))); */

/* let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let somaMatrizes = matriz1.map((linha, i) => linha.map((valor, j) => valor + matriz2[i][j]));

console.log(somaMatrizes); */