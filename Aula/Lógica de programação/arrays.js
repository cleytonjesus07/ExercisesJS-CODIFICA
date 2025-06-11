let listaDeFrutas = Array();
let listaNomes = ['Giovanna', 'Augusto'];

listaDeFrutas[0] = 'maça';
listaDeFrutas[1] = 'morango';
listaDeFrutas['adocicadas'] = 'manga';

for (let i = 0; i < listaDeFrutas.length; i++) {
    console.log(listaDeFrutas[i]);
}

listaDeFrutas.push("mamão");//Adiciona no fim do array
listaDeFrutas.unshift("melancia");//Adiciona no inicio do array
listaDeFrutas.pop();//Remove o último elemento do array
listaDeFrutas.shift();//Remove o primeiro elemento do array

console.table(listaDeFrutas);