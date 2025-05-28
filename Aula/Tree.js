class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(node) {
        this.children = this.children.filter(child => child.value !== node);
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue);
    }

    traverseDFS(callback) {
        function recurse(node) {
            callback(node);
            node.children.forEach(child => recurse(child));
        }
        recurse(this.root);
    }

    printTree() {
        const p = (n, pre = '', last = true) => (console.log(`${pre}${last ? '└── ' : '├── '}${n.value}`), n.children.forEach((c, i) => p(c, `${pre}${last ? '    ' : '│   '}`, i === n.children.length - 1)));
        p(this.root);
    }
}

const tree = new Tree('A');
const B = new TreeNode('B');
const C = new TreeNode('C');
const D = new TreeNode('D');
const E = new TreeNode('E');
const F = new TreeNode('F');
const G = new TreeNode('G');
const H = new TreeNode('H');

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E);
B.addChild(F);

C.addChild(G);
G.addChild(H);


function printNode(node) {
    console.log(node);
}


tree.printTree()