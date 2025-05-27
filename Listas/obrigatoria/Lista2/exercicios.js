const prompt = require("prompt-sync")();

function Sessao1() {
    console.log("---- Seção 1: Estruturas de Controle Avançadas ----");

    function Exercicio1() {
        function ehDataValida(dia, mes, ano) {
            if (dia < 1 || mes < 1 || mes > 12 || ano < 1) return false;

            const mesesCom30dias = [4, 6, 9, 11];
            if (mesesCom30dias.includes(mes)) return dia <= 30;

            const ehBissexto = () =>
            (ano % 4 !== 0 ? false :
                ano % 100 !== 0 ? true :
                    ano % 400 !== 0 ? false : true);

            if (mes === 2) return dia <= (ehBissexto() ? 29 : 28)

            return dia <= 31;

        }
        console.log(ehDataValida(29, 2, 1996));
        console.log(ehDataValida(29, 2, 2023));
        console.log(ehDataValida(31, 4, 2023));
        console.log(ehDataValida(15, 13, 2023));
    }

    function Exercicio2() {
        console.log(`
         ---- JOGO DA ADIVINHAÇÃO ----    
        `)
        let tentativas = 0;
        const computer = Math.floor((Math.random() * 100) + 1)
        while (true) {
            let player = Number(prompt("Adivinhe o número: "));

            if (player === computer) {
                console.log(`
                    !!! PARABÉNS - Você venceu !!! 
                    Seu número: ${player}.
                    Computador: ${computer}.
    
                    Número de tentativas: ${tentativas}.
                    `)
                break;
            }

            console.log(player < computer ? "mais alto!" : "mais baixo!");
            tentativas++;
        }
    }

    function Exercicio3() {
        function removerDuplicatasTexto(frase) {
            const palavras = frase.split(' ');
            const palavrasUnicas = [];

            for (let i = 0; i < palavras.length; i++) {
                if (palavrasUnicas.indexOf(palavras[i]) === -1) palavrasUnicas.push(palavras[i]);
            }

            return palavrasUnicas;
        }
        let frase = "ola ola mundo mundo";
        console.log(`Frase: ${frase}\nResultado:${JSON.stringify(removerDuplicatasTexto(frase))}`);
    }
    console.log("Exercício 1: \n");
    Exercicio1()
    console.log("Exercício 2: \n");
    Exercicio2()
    console.log("Exercício 3: \n");
    Exercicio3()
}


function Sessao2() {
    console.log("---- Seção 2: Funções e Recursão ----");

    function Exercicio4() {
        function fatorial(n) {
            if (n < 0) throw Error("Não existe fatorial de número negativo");
            if (n === 0) return 1;
            return n * fatorial(n - 1)
        }

        console.log(fatorial(5))
        console.log(fatorial(10))
        console.log(fatorial(8))
    }

    function Exercicio5() {
        function Debounce(fn, delay) {
            let idTimeout;
            return function (...args) {
                clearTimeout(idTimeout);
                idTimeout = setTimeout(() => fn.apply(this, args), delay);
            }
        }

        const funcao = Debounce(() => console.log("Me chamou 1?"), 3000);
        funcao();
        funcao();
        funcao();
    }

    function Exercicio6() {
        function memoize(fn) {
            const cache = new Map()
            return function (...args) {
                const key = JSON.stringify(args);

                if (cache.has(key)) {
                    return cache.get(key)
                }

                const result = fn.apply(this, args);
                cache.set(key, result);
                return result;
            }
        }
        let multiplicar = (a, b) => a * b;
        multiplicar = memoize(multiplicar);

        console.time();
        console.log(multiplicar(192, 45));
        console.timeEnd();
        console.time();
        console.log(multiplicar(2, 45));
        console.timeEnd();
        console.time();
        console.log(multiplicar(192, 45));
        console.timeEnd();
        console.time()
        console.log(multiplicar(192, 45))
        console.timeEnd()
        console.time()
        console.log(multiplicar(192, 45))
        console.timeEnd()
    }

    console.log("Exercício 4: \n");
    Exercicio4();
    console.log("Exercício 5: \n");
    Exercicio5();
    console.log("Exercício 6: \n");
    Exercicio6();
}

function Sessao3() {
    console.log("---- Seção 3: Arrays e Objetos Complexos ----");

    function Exercicio7() {
        const produtos = [
            { nome: "Notebook", preco: 2500.00 },
            { nome: "Smartphone", preco: 1500.00 },
            { nome: "Tablet", preco: 1200.00 },
            { nome: "Fone de Ouvido", preco: 200.00 },
            { nome: "Teclado", preco: 150.00 }
        ];

        function listarNomesOrdenadosPorPreco(arr) {
            return arr.sort((a, b) => a.preco - b.preco).map((produtoCrescente) => produtoCrescente.nome);
        }

        console.log(listarNomesOrdenadosPorPreco(produtos))
    }

    function Exercicio8() {
        const vendas = [
            { cliente: "Fernanda Silva", total: 425.90 },
            { cliente: "Ricardo Oliveira", total: 1200.50 },
            { cliente: "Fernanda Silva", total: 100.00 },   // +1
            { cliente: "João Batista", total: 750.00 },
            { cliente: "Ricardo Oliveira", total: 300.00 }, // +1 
            { cliente: "Ana Claudia", total: 150.25 },
        ];


        const totalVendas = vendas.reduce((acc, venda) => {
            const { cliente, total } = venda;

            (acc[cliente]) ? acc[cliente] += total : acc[cliente] = total;

            return acc;

        }, {});
        console.log(totalVendas);
    }

    function Exercicio9() {
        const pares = [['nome', 'Maria'], ['idade', 30], ['cidade', 'São Paulo']];
        const obj = { nome: 'Carlos', profissao: 'Engenheiro', ativo: true };

        function paresParaObjeto(pares) {
            return pares.reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {})
        }
        function objetoParaPares(obj) {
            return Object.entries(obj);
        }

        console.log(paresParaObjeto(pares), objetoParaPares(obj));
    }

    console.log("Exercício 7: \n");
    Exercicio7();
    console.log("Exercício 8: \n");
    Exercicio8();
    console.log("Exercício 9: \n");
    Exercicio9();
}


console.log("---- Lista 2 - obrigatória ----");
let choice;
while (choice !== 4) {
    console.log(`
        ==== Menu ====
        1 - Sessão 1
        2 - Sessão 2
        3 - Sessão 3
        4 - Sair
    `);
    choice = Number(prompt("Digite( 1, 2, 3 ou 4): "));
    console.clear();
    switch (choice) {
        case 1:
            Sessao1();
            break;
        case 2:
            Sessao2();
            break;
        case 3:
            Sessao3();
            break;
        case 4:
            choice = 4;
            break;
        default:
            console.log("Digite somente valores entre 1 e 4");
            break;
    }
}