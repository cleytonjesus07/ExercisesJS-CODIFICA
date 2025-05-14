let livro = {
    nome: "marley e Eu",
    anoLancamento: 2024,
    autor: "Will Smith",
    nrPaginas: 12,
    genero: "Comédia",
    atores: ['Scooby', 'Super Cão', 'Batcão'],
    mostrarCaracteristicas: function () {
        return `${this.nome} é um livro para ficar alegre.`
    }
}

/* console.log(livro.mostrarCaracteristicas());

console.log(livro.nome); */

/* let livro2 = livro;
livro2.preco = 20.2;
console.log(livro, livro2) */

/* let filme = {
    titulo: "High School Musical",
    anoLancamento: 2007,
    atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
    genero: "guerra",
    mostrarCaracteristicas: function () {
        return `
        FILME:${this.titulo} é um filme de ${this.genero}
        ATORES:${this.atores.join(", ")}
        `
    }
}

console.log(filme.mostrarCaracteristicas()); */

function Anime(nome, maisForte, maisFraco, nota) {
    return {
        nome,
        maisForte,
        maisFraco,
        nota
    }
}

/* let anime1 = Anime("Dragon Ball Z", "Goku", "Tenchihan", 10);

console.log(anime1) */

let jogadores = ["Calleri", "Memphis Depay", "Ganso", "Rogério Ceni"];
let jogo = {
    titulo: "Red Dead Redemption",
    genero: "Velho-oeste",
    jogadore: "offline: 1 | online: 1-32",
    online: true
}

//Array
/* for (let index in jogadores) {
    console.log(index, jogadores[index]);
}
for (let value of jogadores) {
    console.log(value);
} */

//Objetos

/* for (let index in jogo) {
    //key
    console.log(index)
}

for (let value of Object.keys(jogo)) {
    console.log(jogo[value]);
} */

/* for (let i = 0; i < Object.keys(jogo).length; i++) {
    console.log(jogo.keys);
} */

//Calculem as médias das notas dos alunos de um professor e digam se a turma do Professor está na média.

/* let professor = {
    nome: 'Stark Parker',
    materia: 'Física',
    notas: {
        aluno1: [10, 10],
        aluno2: [3, 7],
        aluno3: 10
    },
    [Symbol.iterator]() {
        const entries = Object.entries(this);
        let index = 0;

        return {
            next() {
                if (index < entries.length) {
                    return { value: entries[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

for (let v of professor) {
    console.log(v)
} */

/* let somaNotas = 0, numeroAlunos = 0;

for (let index in professor.notas) {
    somaNotas += Array.isArray(professor.notas[index]) ? professor.notas[index].reduce((acc, nota) => acc + nota, 0) / professor.notas[index].length : professor.notas[index];
    numeroAlunos++
}

let media = (somaNotas / numeroAlunos).toFixed(1);

if (media >= 6) {
    console.log(`a media da turma é ${media} e está acima do padrão`);
} else {
    console.log(`a media da turma é ${media} e está abaixo do padrão`);
} */

let livraria = [
    { titulo: "1984", autor: "George Orwell", ano: 1984 },
    { titulo: "O profeta", autor: "Endrew Berthold", ano: 2001 },
    { titulo: "Código Limpo", autor: "Martin", ano: 2010 },
    { titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910 },
    { titulo: "O Principe", autor: "Maquiável", ano: 2002 }
]

/* for (let livro of livraria) {
    if (livro.ano < 2000) {
        console.log(livro);
    }
} */

let filmes = [
    { titulo: "Sempre ao seu lado", genero: "De chorar" },
    { titulo: "Massacre da Serra Elétrica", genero: "Terroor" },
    { titulo: "Minha Mãe é uma Peça", genero: "Comédia" },
    { titulo: "Tarzan", genero: "Aventura" },
    { titulo: "Como eu era antes de você", genero: "De chorar" },
    { titulo: "Jogo da imitação", genero: "Histórico" },
    { titulo: "Top Gun", genero: "Guerra" },
    { titulo: "Your Name", genero: "Romance" },
    { titulo: "Deadpool", genero: "Héroi" },
    { titulo: "Batman Forever", genero: "Héroi" },
]

/* let generoContagem = filmes.reduce((acc, filme) => {
    acc[filme.genero] = (acc[filme.genero] || 0) + 1;
    return acc;
}, {});

console.log(generoContagem) */

/* let contagemFilmes = {};

filmes.forEach((filme) => {
    if (contagemFilmes[filme.genero]) {
        //Se já estiver listado ele incrementa
        contagemFilmes[filme.genero]++
    } else {
        contagemFilmes[filme.genero] = 1
    }
})

for (let genero in contagemFilmes) {
    console.log(`Estão presentes na lista ${contagemFilmes[genero]} do gênero ${genero}`)
} */

/* let objeto = { nome: "Géssica" }
objeto.idade = 32 //Inserindo uma key e valor no objeto
console.log(objeto) */

//Construam uma função que calcule um fatorial de um número

/* function calcularFatorial(numero) {
    if (numero < 0) return "Não existe fatorial de números negativos.";
    if (numero === 0 || numero === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(calcularFatorial(5)); */

//Fibonacci
/* 
function fibonacci() {
    let a = 0, b = 1, temp; // não pode se iterados
    console.log(a);
    console.log(b);
    for (let i = 3; i <= 10; i++) {
        temp = a + b;
        console.log(temp)
        a = b;
        b = temp
    }
} */

/* function PA(primeiroTermo, razao) {
    let soma = 0;
    for (let i = 0; i <= 10; i++) {
        let term = primeiroTermo + i * razao;
        console.log(term);
        soma += term;
    }
    console.log(`A soma dos termos é ${soma}`);
}

console.log(PA(4, 3)); */


/* 
Forma mais minimalista de implementar um fibonacci em JS
const fibonacci = n => [...Array(n)].reduce((a, _, i) => a.concat(i > 1 ? a[i - 1] + a[i - 2] : i), []);

console.log(fibonacci(10))
*/