/* 
O que define um objeto:
 Três perguntas:
    1 - O que ele tem/possui?
    2 - O que ele faz?
    3 - Como ele está?

Objeto representa um elemento do mundo real!

Objeto está presente na Paradigma Orientação Objetos(POO).

Objetos são instâncias de classes(modelo)
*/

let car = {
    nome: "MacQueen",
    cor: "Vermelho"
}
let car2 = {
    nome: "Sally",
    cor: "Azul"
}

/* 
    Um objeto não existe sem uma classe, mas no JS existe.

*/

/* console.log(car.nome); */

class carExemplo {
    //Classe é um protótipo
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

let carro = new carExemplo("Camaro", "Amarelo");

/* console.log(carro.nome); */

/* Cada posição na Lista Encadeada é chamada de Nó(Node)  */

class Node {
    constructor(valor) {
        //Constructor é um metódo que entra em ação  quando instânciamos uma classe.
        this.valor = valor;
        this.proximo = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    inserirInicio(valor) {
        let novo = new Node(valor);
        novo.proximo = this.head;
        this.head = novo;
    }

    imprimir() {
        let elAtual = this.head;
        let str = "";
        while (elAtual) {
            str += elAtual.valor + '->';
            elAtual = elAtual.proximo;
        }
        str += "null";
        console.log(str);
    }
}

let lista = new LinkedList();

lista.inserirInicio(10);
lista.inserirInicio(9);

lista.imprimir()

/* 
    Lista:
        Encadeada: cada nó sabe o seu próximo apenas.

        Duplamente Encadeada: cada nó sabe quem é o nó próximo e o seu antecessor.
*/

class NodeDoublyLinkedList {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // Adicionando tail para facilitar operações no fim
    }

    inserirInicio(valor) {
        let novo = new NodeDoublyLinkedList(valor);
        novo.proximo = this.head;
        if (this.head) {
            this.head.anterior = novo;
        } else {
            this.tail = novo; // Se a lista estava vazia, novo nó é head e tail
        }
        this.head = novo;
    }

    inserirFim(valor) {
        let novo = new NodeDoublyLinkedList(valor);
        if (!this.head) {
            this.head = novo;
            this.tail = novo;
        } else {
            novo.anterior = this.tail;
            this.tail.proximo = novo;
            this.tail = novo;
        }
    }

    inserirFrente(referencia, valor) {
        // Insere novo nó à frente do nó com valor de referência
        let atual = this.head;
        while (atual) {
            if (atual.valor === referencia) {
                let novo = new NodeDoublyLinkedList(valor);
                novo.proximo = atual.proximo;
                novo.anterior = atual;
                if (atual.proximo) {
                    atual.proximo.anterior = novo;
                } else {
                    this.tail = novo; // Se inserindo após o último nó
                }
                atual.proximo = novo;
                return;
            }
            atual = atual.proximo;
        }
        throw new Error("Referência não encontrada");
    }

    inserirAtras(referencia, valor) {
        // Insere novo nó atrás do nó com valor de referência
        let atual = this.head;
        while (atual) {
            if (atual.valor === referencia) {
                let novo = new NodeDoublyLinkedList(valor);
                novo.proximo = atual;
                novo.anterior = atual.anterior;
                if (atual.anterior) {
                    atual.anterior.proximo = novo;
                } else {
                    this.head = novo; // Se inserindo antes do primeiro nó
                }
                atual.anterior = novo;
                return;
            }
            atual = atual.proximo;
        }
        throw new Error("Referência não encontrada");
    }

    // Método auxiliar para visualização
    imprimir() {
        let atual = this.head;
        let resultado = [];
        while (atual) {
            resultado.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(resultado.join(" <-> "));
    }
}

// Exemplo de uso:
const listaD = new DoublyLinkedList();
listaD.inserirInicio(3);
listaD.inserirInicio(2);
listaD.inserirInicio(1);
listaD.inserirFim(4);
listaD.inserirFrente(3, 3.5); // Insere 3.5 após o 3
listaD.inserirAtras(3, 2.5); // Insere 2.5 antes do 3
listaD.imprimir(); // 1 <-> 2 <-> 2.5 <-> 3 <-> 3.5 <-> 4