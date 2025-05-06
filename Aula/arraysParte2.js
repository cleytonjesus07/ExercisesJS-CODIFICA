// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.

// Use métodos de array para calcular:

// A soma de todos os elementos.

// A média dos elementos. 

// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares

/* 
    Performance é importante!!!
*/

/* let nums = [10, 20, 30, 4, 5, 2, 1];

let soma = nums.reduce((a, b) => a + b, 0);
let media = soma / nums.length;
let pares = nums.filter(n => (n % 2 === 0));
let ordemCrescente = nums.sort((a, b) => a - b);
console.log(`
    Array original: ${nums}
    A soma: ${soma}
    A média: ${media.toFixed(1)}
    O array de pares: ${pares}    
    Array em ordem crescente: ${ordemCrescente}
`); */

let matriz = [
    [20, 10, 10],
    [10, 0, 10],
    [10, 10, 10]
]
let soma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === j && matriz[i][j] !== 1) {
            soma += matriz[i][j];
        }
    }
}
console.log(soma)