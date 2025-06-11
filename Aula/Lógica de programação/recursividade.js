
//LIFO = Last In First Out = Pilha de chamadas

/* const fatorial = (n) => (n === 0) ? 1 : n * fatorial(n - 1);
 *//*

--Recursividade--

Empilha as chamadas para ser ressolvida do último para o primeiro da pilha.

Evitar utilizar funções recursivas para evitar estouro de stack(Stack Overflow).

Ocasionado quando há o acúmulo de chamadas de funções na memória.

*/

//FIFO = First In First Out

/* console.log(fatorial()) */


//---------------------------------------------------------------------

//Soma dos números de 1 até N

/* const somarNumero = (n) => (n <= 1) ? 1 : n + somarNumero(n - 1);

console.log(somarNumero(2));
 */
//Fibonacci recursivo

console.clear()

/* const fibonacciRecursivo = (n) => (n <= 1) ? n : fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);

console.log(fibonacciRecursivo(10)) */
/* 
let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            { id: 2, nome: "Celulares", filhos: [] },
            {
                id: 3, nome: "Computadores", filhos: [
                    { id: 4, nome: "Tablets", filhos: [] }
                ]
            },
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function imprimirCategorias(categorias, nivel = 0) {
    for (let categoria of categorias) {
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if (categoria.filhos.length > 0) {
            imprimirCategorias(categoria.filhos, nivel + 1);
        }
    }
}

imprimirCategorias(categorias); */

/* 
    TAD - Tipos Abstratos de Dados

    -Abstração
    -Encapsulamento
    -Ocultação de informação
    -Separação entre Interface e Implementação

    ESTRUTURAS DE DADOS:

    -LISTAS(Encadeadas, duplamente encadeadas e circulares)
    -PILHAS
    -FILAS
    -ARVORES DE DECISÃO,BINÁRIA E DE BUSCA
    -HASH
    -MAPA
    -GRAFO
*/