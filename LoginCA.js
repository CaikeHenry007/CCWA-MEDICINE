
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
    
