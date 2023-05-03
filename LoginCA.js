<<<<<<< Updated upstream

<<<<<<< HEAD
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

=======
function login(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "anajulia2023@gmail.com" && senha == "12345"){
        alert('Você foi logado com sucesso');
        location.href = "./Login Conectado/Exemplo.html";
    }else{
alert('Usuário ou senha incorretos');
    }
    }
    
>>>>>>> 681b1d4233d6e75b261dec3604d2ea18e2c5a9a0
=======

function login(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "anajulia2023@gmail.com" && senha == "12345"){
        alert('Você foi logado com sucesso');
        location.href = "./Login Conectado/Exemplo.html";
    }else{
alert('Usuário ou senha incorretos');
    }
}
    
>>>>>>> Stashed changes
