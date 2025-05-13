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

let professor = {
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
}

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
