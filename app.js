function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function sortear() {
    let listaSorteados = [];
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let numeroAleatorio;
    for (let i = 0; i < quantidade; i++) {
        numeroAleatorio = gerarNumeroAleatorio(de, ate);
        while (listaSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarNumeroAleatorio(de, ate);
        }
        listaSorteados.push(numeroAleatorio);
    }
    let texto = document.getElementById("resultado");
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaSorteados}</label>`
    alterarStatusBotao()
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}