let nome = localStorage.getItem("petNome");
let especie = localStorage.getItem("petEspecie");
let idade = localStorage.getItem("petIdade");
let imagem = localStorage.getItem("petImagem");

document.getElementById("petNome").innerHTML = nome;
document.getElementById("petDados").innerHTML = especie + " | " + idade;
document.getElementById("petImagem").src = imagem;

let botoesData = document.querySelectorAll(".dias-calendario button:not(.apagado)");
let botoesHorario = document.querySelectorAll(".horarios button");
let botoesUnidade = document.querySelectorAll(".unidades button");

botoesData.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botoesData.forEach(function(b) {
            b.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

        let mesAtual = document.getElementById("mesAtual").innerHTML;
        localStorage.setItem("dataAgendada", botao.innerHTML + " de " + mesAtual);
    });
});

botoesHorario.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botoesHorario.forEach(function(b) {
            b.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

        localStorage.setItem("horarioAgendado", botao.innerHTML);
    });
});

botoesUnidade.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botoesUnidade.forEach(function(b) {
            b.classList.remove("selecionado-unidade");
        });

        botao.classList.add("selecionado-unidade");

        localStorage.setItem("unidadeAgendada", botao.innerText);
    });
});

let buscaUnidade = document.getElementById("buscaUnidade");

buscaUnidade.addEventListener("keyup", function() {
    let texto = buscaUnidade.value.toLowerCase();

    botoesUnidade.forEach(function(botao) {
        if (botao.innerText.toLowerCase().includes(texto)) {
            botao.style.display = "block";
        } else {
            botao.style.display = "none";
        }
    });
});

let hoje = new Date();

let meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

document.getElementById("mesAtual").innerHTML =
    meses[hoje.getMonth()] + " " + hoje.getFullYear();

let dataSelecionada = document.querySelector(".dias-calendario .selecionado");
let horarioSelecionado = document.querySelector(".horarios .selecionado");
let unidadeSelecionada = document.querySelector(".unidades .selecionado-unidade");

if (dataSelecionada) {
    localStorage.setItem(
        "dataAgendada",
        dataSelecionada.innerHTML + " de " + document.getElementById("mesAtual").innerHTML
    );
}

if (horarioSelecionado) {
    localStorage.setItem("horarioAgendado", horarioSelecionado.innerHTML);
}

if (unidadeSelecionada) {
    localStorage.setItem("unidadeAgendada", unidadeSelecionada.innerText);
}