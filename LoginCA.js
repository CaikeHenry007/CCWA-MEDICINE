
var Email;
var Senha;
var resultado;
var mensagem;

function Prosseguir() {
    var Email = document.getElementById('Email').value;
    var Senha = document.getElementById('Senha').value;

    if (Email == "usuario@gmail.com" && Senha == "2345") {
        alert('Email e senha corretos!')
        location.href = ""
    } else {
        alert("Usuário e/ou senha incorretos");
    }
}

