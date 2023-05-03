
function Prosseguir(){
    var Email = document.getElementById('Email').value;
    var Senha = document.getElementById('Senha').value;

    if(Email == "anajulia2023@gmail.com" && Senha == "12345"){
        alert('Você foi logado com sucesso');
        location.href = "./Login Conectado/Exemplo.html";
    }else{
alert('Usuário ou senha incorretos');
    }
    }
    
