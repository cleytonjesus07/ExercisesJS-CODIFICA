const prompt = require("prompt-sync")();

console.log("----EXERCICIOS - LISTA 2(Parte 1)----")

/* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência. */

console.log("EXERCÍCIO 11\n");

let primeroTermo = Number(prompt("Digite o primeiro termo(a1) da PA: "));
let razao = Number(prompt("Digite a razão(r) da PA: "));
let termos = [], soma = 0;

for (let index = 1; index <= 10; index++) {
    let termo = primeroTermo + (index * razao);
    termos.push(termo);
    soma += termo;
}

console.log(`
    Os 10 primeiros termos da PA são: ${termos.join(', ')}    
    A soma dos 10 primeiros termos é: ${soma}
`)

//---------------------------------------------------------------------------

/* Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

console.log("\nEXERCÍCIO 12\n");

let fibonacci = [1, 1]

for (let index = 2; index < 10; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}

console.log(`
    Os 10 primeiros elementos da Sequência de Fibonacci são: ${fibonacci.join(', ')}
`);

//---------------------------------------------------------------------------
/* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci. */
console.log("\nEXERCÍCIO 13\n");

let pos = 15, fibonacci2 = [];

if (pos >= 1) fibonacci2.push(1);
if (pos >= 2) fibonacci2.push(1);

for (let i = 2; i < pos; i++) {
    fibonacci2[i] = fibonacci2[i - 1] + fibonacci2[i - 2];
}

console.log(`
    Os 15 primeiros elementos da Sequência de Fibonacci são: ${fibonacci2.join(', ')}    
`);

//---------------------------------------------------------------------------

/* 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

console.log("\nEXERCÍCIO 14\n");

let listaPessoas = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt(`Digite o ${i + 1}° nome:`);
    listaPessoas.push(nome);
}
console.log(`
Lista de nomes(ordem inversa):
${listaPessoas.reverse().join("\n")}    
`);

//---------------------------------------------------------------------------

/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

console.log("\nEXERCÍCIO 15\n");

let numeros = [];

for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
}

let pares = numeros.reduce((acc, num, index) => {
    if (num % 2 === 0) {
        acc.push({
            numero: num,
            posicao: index
        });
    }
    return acc;
}, []);
console.log(`
Número pares contidos na lista mais a sua posição:    
Números pares | Posição na lista:
`);
pares.forEach(n => { console.log(`${n.numero} | ${n.posicao}`) });

//---------------------------------------------------------------------------


/* 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

console.log("\nEXERCÍCIO 16\n");

let randomNumbers = []

for (let index = 0; index < 20; index++) {
    let randomNumber = Math.floor(Math.random() * 100);
    randomNumbers.push(randomNumber);
}

console.log(`
Numeros gerados: ${randomNumbers.join(", ")}
Em ordem crescente: ${randomNumbers.sort((a, b) => a - b)}    
`);

//---------------------------------------------------------------------------
/* 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

console.log("\nEXERCÍCIO 17\n");

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    nomes.push(nome);
    idades.push(idade);
}

console.log("\nPessoas menores de idade:");
for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}

//---------------------------------------------------------------------------

/* 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

console.log("\nEXERCÍCIO 18\n");

let funcionario = {
    nome: prompt("Digite o nome do funcionário:"),
    cargo: prompt("Digite o cargo do funcionário:"),
    salario: parseFloat(prompt("Digite o salário do funcionário:"))
};

console.log("\nDados do Funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
//---------------------------------------------------------------------------

console.log("\nEXERCÍCIO 19\n");

let horarios = [];
for (let i = 0; i < 5; i++) {
    let hora, minuto, segundo;

    do {
        console.log("Hora: número entre 00 e 23");
        hora = parseInt(prompt(`Hora ${i + 1} (HH):`)) || 0;
    } while (hora < 0 || hora > 23);

    do {
        console.log("Minutos: número entre 00 e 59");
        minuto = parseInt(prompt(`Minuto ${i + 1} (MM):`)) || 0;
    } while (minuto < 0 || minuto > 59);

    do {
        console.log("Segundos: número entre 00 e 59");
        segundo = parseInt(prompt(`Segundo ${i + 1} (SS):`)) || 0;
    } while (segundo < 0 || segundo > 59);

    horarios.push(
        `${hora.toString().padStart(2, '0')}:` +
        `${minuto.toString().padStart(2, '0')}:` +
        `${segundo.toString().padStart(2, '0')}`
    );
}

console.log("Horários válidos:\n" + horarios.join('\n'));

//---------------------------------------------------------------------------

/* 
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto
*/
console.log("\nEXERCÍCIO 20\n");

let funcionarios = [], qtndFuncionarios = 80;

for (let index = 0; index < qtndFuncionarios; index++) {
    let funcionario = {
        matricula: Math.floor(Math.random() * 100000).toString().padStart(5, '0'),
        nome: prompt("Insira o nome do funcionário:")
    }
    funcionario.salarioBruto = Number(prompt(`Digite o salário bruto de ${funcionario.nome}: `));
    funcionario.deducaoINSS = funcionario.salarioBruto * 0.12;
    funcionario.salarioLiquido = funcionario.salarioBruto - funcionario.deducaoINSS;
    funcionarios.push(funcionario);
}

console.log("\n========== CONTRA CHEQUES ==========");
funcionarios.forEach(func => {
    console.log(`
        Matrícula: ${func.matricula}
        Nome: ${func.nome}
        Salário bruto: R$ ${func.salarioBruto.toFixed(2)}
        Dedução INSS (12%): R$ ${func.deducaoINSS.toFixed(2)}
        Salário líquido: R$ ${func.salarioLiquido.toFixed(2)}
        ====================================`);
})

