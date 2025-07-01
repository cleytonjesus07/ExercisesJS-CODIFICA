const container_input = document.getElementsByClassName('container-input')[0];
const btn_add = document.getElementById("add");
const btn_clear = document.getElementById("clear");
const lista_itens = document.getElementById("lista_itens");
const input = document.getElementById("input");
const KEY_localStorage = "lista";
let itens = capturarLista();

function salvarLista(lista) {
    localStorage.setItem(KEY_localStorage, JSON.stringify(lista));
}

function capturarLista() {
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
    itens.push(newItem);
    input.value = "";
    renderizarLista(itens);
});

function atualizarQuantidade(length) {
    const qtnd_element = document.getElementsByClassName("qtnd")[0];
    qtnd_element.textContent = `Quantidade: ${length}`;
}

function definirEstadoDoItem(index, status) {
    itens[index].purchased = status;
    renderizarLista(itens);
}

function renderizarLista(arrItens) {
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
    atualizarQuantidade(itens.length);
    salvarLista(itens);
}

function deletarItem(index) {
    const newList = itens.filter((_, i) => i !== index);
    itens = newList;
    renderizarLista(itens);
}

function filtrarItens(value) {
    let newList = null;
    if (value == "1") {
        newList = itens.filter((item) => {
            if (!item.purchased) return;
            return item;
        })
    } else {
        newList = itens.filter((item) => {
            if (item.purchased) return;
            return item;
        })
    }
    renderizarLista(newList);
    atualizarQuantidade(newList.length);

}

renderizarLista(itens);

// Funcionalidades:

// Permita ordenar alfabeticamente ou por status
