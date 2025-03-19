let listaAmigos = [];

// Adiciona um nome à lista de amigos
function adicionarAmigo() { // Alterado para corresponder ao HTML
    let campoNome = document.getElementById("amigo");
    let nomeDigitado = campoNome.value.trim();
    let padraoNomeValido = /^[A-Za-zÀ-ÿ\s]+$/; // Permite apenas letras e espaços
    
    if (nomeDigitado === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        return;
    }
    
    if (!padraoNomeValido.test(nomeDigitado)) {
        alert("O nome deve conter apenas letras e espaços, sem números ou caracteres especiais!");
        return;
    }
    
    if (!listaAmigos.includes(nomeDigitado)) {
        listaAmigos.push(nomeDigitado);
        atualizarListaDeAmigos();
        campoNome.value = "";
        verificarCampoNome();
    } else {
        alert("Nome já adicionado!");
    }
}

// Atualiza a lista de amigos na tela
function atualizarListaDeAmigos() {
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = "";
    listaAmigos.forEach(nome => {
        let itemLista = document.createElement("li");
        itemLista.textContent = nome;
        elementoLista.appendChild(itemLista);
    });
}

// Sorteia um nome aleatoriamente
function sortearAmigo() { // Alterado para corresponder ao HTML
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomes antes de sortear!");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];
    
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "<li>Nome sorteado: " + nomeSorteado + "</li>";
}

// Habilita ou desabilita o botão "Adicionar" dependendo do campo de entrada
function verificarCampoNome() {
    let campoNome = document.getElementById("amigo");
    let botaoAdicionar = document.querySelector(".button-add");
    botaoAdicionar.disabled = campoNome.value.trim() === "";
}

document.getElementById("amigo").addEventListener("input", verificarCampoNome);
