class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null; // último da fila
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode;
        }

        this.rear = newNode;

        if (!this.front) {
            this.front = newNode;
        }

        this.size++;
    }
    dequeue() {
        if (!this.front) {
            return null; // Fila vazia
        }

        const removedNode = this.front;
        this.front = this.front.next;

        if (!this.front) {
            // Se a fila ficou vazia após remover, atualiza o rear também
            this.rear = null;
        }

        this.size--;
        return removedNode.value;
    }
}