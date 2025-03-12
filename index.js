const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item")

let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === ""){
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");

    const containerItemDalista = document.createElement("div");
    containerItemDalista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";  
    inputCheckbox.id = "checkbox-" + contador++;
    
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDalista.appendChild(inputCheckbox);
    containerItemDalista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDalista);
    listaDeCompras.appendChild(itemDaLista);
})

