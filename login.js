function validarLogin(event) {

    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let mensagemErro = document.getElementById("mensagemErro");

    if (usuario === "tutor" && senha === "123456") {

        window.location.href = "index.html";

    }

    else if (usuario === "candidato" && senha === "cand098") {

        window.location.href = "index.html";

    }

    else if (usuario === "ong" && senha === "ong-135") {

        window.location.href = "painel_ong.html";

    }

    else if (usuario === "prefeitura" && senha === "pref@456") {

        window.location.href = "painel_prefeitura.html";

    }

    else {

        mensagemErro.innerHTML = "Usuário ou senha inválidos.";

    }

}