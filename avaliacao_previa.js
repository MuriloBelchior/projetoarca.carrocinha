let nome = localStorage.getItem("petNome");
let especie = localStorage.getItem("petEspecie");
let idade = localStorage.getItem("petIdade");
let imagem = localStorage.getItem("petImagem");

document.getElementById("petNome").innerHTML = nome;
document.getElementById("petDados").innerHTML = especie + " | " + idade;
document.getElementById("petImagem").src = imagem;