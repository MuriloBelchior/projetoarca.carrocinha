let nome = localStorage.getItem("petNome");
let imagem = localStorage.getItem("petImagem");
let data = localStorage.getItem("dataAgendada");
let horario = localStorage.getItem("horarioAgendado");
let unidade = localStorage.getItem("unidadeAgendada");

document.getElementById("petNome").innerHTML = nome;
document.getElementById("petImagem").src = imagem;
document.getElementById("dataAgendada").innerHTML = data;
document.getElementById("horarioAgendado").innerHTML = horario;
document.getElementById("unidadeAgendada").innerHTML = unidade;