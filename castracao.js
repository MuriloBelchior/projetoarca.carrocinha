function selecionarPet(nome, especie, idade, imagem) {
    localStorage.setItem("petNome", nome);
    localStorage.setItem("petEspecie", especie);
    localStorage.setItem("petIdade", idade);
    localStorage.setItem("petImagem", imagem);
}