const container_input = document.getElementsByClassName('container-input')[0];
const btn_add = document.getElementById("add");
const btn_clear = document.getElementById("clear");
const lista_itens = document.getElementById("lista_itens");
const input = document.getElementById("input");
const ordenador = document.getElementById("order");
const filtro = document.getElementById("filtro");
const KEY_localStorage = "lista";
const data = {
    escolha_ordenada: capturarDados().escolha_ordenada || null,
    escolha_filtrada: capturarDados().escolha_filtrada || null,
    lista: capturarDados().lista || []
}
function salvarDados(data) {
    localStorage.setItem(KEY_localStorage, JSON.stringify(data));
}

function capturarDados() {
    if (!localStorage.getItem(KEY_localStorage)) return [];
    return JSON.parse(localStorage.getItem(KEY_localStorage));
}

btn_clear.addEventListener("click", function () {
    if (!input.value) return;
    input.value = "";
});

btn_add.addEventListener("click", function () {
    const input_value = input.value.trim();

    if (!input_value) return;
    const newItem = {
        name: input_value,
        purchased: false
    }
    data.lista.push(newItem);
    input.value = "";
    renderizarLista(data.lista);
});

function atualizarQuantidade(length) {
    const qtnd_element = document.getElementsByClassName("qtnd")[0];
    qtnd_element.textContent = `Quantidade: ${length}`;
}

function definirEstadoDoItem(index, status) {
    data.lista[index].purchased = status;
    renderizarLista(data.lista);
}

function renderizarLista(arrItens) {
    (data.lista.length <= 1) ? ordenador.setAttribute("disabled", "") : ordenador.removeAttribute("disabled");
    (data.lista.length <= 1) ? filtro.setAttribute("disabled", "") : filtro.removeAttribute("disabled");
    lista_itens.innerHTML = "";
    arrItens.forEach((item, index) => {
        lista_itens.insertAdjacentHTML("beforeend", `
            <li>
                <input ${item.purchased && "checked"} type="checkbox" onClick="definirEstadoDoItem(${index},${!item.purchased})"/>
                ${index + 1} - ${item.name} 
                <button class="clear" onClick="deletarItem(${index})"> X </button>
            </li>
        `);
    })
    atualizarQuantidade(data.lista.length);
    data["lista"] = data.lista;
    salvarDados(data);
}

function deletarItem(index) {
    const newList = data.lista.filter((_, i) => i !== index);
    data.lista = newList;
    renderizarLista(data.lista);
}

function filtrarItens(value) {
    let newList = data.lista;
    if (value == "1") {
        newList = newList.filter((item) => {
            if (!item.purchased) return;
            return item;
        })
    } else if (value == "0") {
        newList = newList.filter((item) => {
            if (item.purchased) return;
            return item;
        })
    }
    renderizarLista(newList);
    atualizarQuantidade(newList.length);
    data.escolha_filtrada = value;
    salvarDados(data);
}

function ordenarItens(value) {
    let newList = data.lista;
    newList = newList.sort((a, b) => {
        const nomeA = a.name.toLowerCase(),
            nomeB = b.name.toLowerCase();
        if (value == 1) {
            if (nomeA < nomeB) return -1;
            if (nomeA > nomeB) return 1;
            return 0;
        } else if (value == 2) {
            if (nomeA > nomeB) return -1;
            if (nomeA < nomeB) return 1;
            return 0;
        } else if (value == 3) {
            if (a.purchased === true && b.purchased === false) return -1;
            if (a.purchased === false && b.purchased === true) return 1;
            return 0;
        } else if (value == 4) {
            if (a.purchased === false && b.purchased === true) return -1;
            if (a.purchased === true && b.purchased === false) return 1;
            return 0;
        } else {
            return 0;
        }
    });

    renderizarLista(newList);
    data.escolha_ordenada = value;
    salvarDados(data)
}

function initApp() {
    (data.lista.length <= 1) ? ordenador.setAttribute("disabled", "") : ordenador.removeAttribute("disabled");
    (data.lista.length <= 1) ? filtro.setAttribute("disabled", "") : filtro.removeAttribute("disabled");
    const dadosEscolha = {
        filtro: capturarDados().escolha_filtrada,
        ordenador: capturarDados().escolha_ordenada
    }
    const opcoes = {
        filtro: ["pendentes", "comprados", "todos"],
        ordenar: {
            ordem_alfabetica: {
                label: "Ordem alfabética",
                opts: ["A-Z", "Z-A"]
            },
            por_status: {
                label: "Por status",
                opts: ["comprado", "pendente"]
            }
        }
    }
    let contador = 0;
    Object.keys(opcoes.ordenar).forEach((value) => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = opcoes.ordenar[value].label;
        opcoes.ordenar[value].opts.forEach((value, index) => {
            const opt = document.createElement("option");
            opt.value = ++contador;
            opt.innerText = value;
            if (dadosEscolha.ordenador == opt.value) opt.setAttribute("selected", "")
            optgroup.append(opt);

        })
        ordenador.append(optgroup)
    })

    opcoes.filtro.forEach((opcao, index) => {
        const opt = document.createElement("option");
        opt.value = index;
        opt.innerText = opcao;
        if (dadosEscolha.filtro == index) opt.setAttribute("selected", "");
        filtro.append(opt);
    });
    if (data.escolha_filtrada) return filtrarItens(data.escolha_filtrada);
    if (data.escolha_ordenada) return ordenarItens(data.escolha_ordenada);
    renderizarLista(data.lista);

}

initApp()

