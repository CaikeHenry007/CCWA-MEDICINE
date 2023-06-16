function Funcao(){event.preventDefault;
    var escolher = document.getElementById('escolher').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    

    /*Paciente*/
    if(email == "ferreira@gmail.com" && senha == "12345678" && escolher == "Paciente") {
        alert('Você foi logado com sucesso! Redirecionando para Página Inicial...');
        location.href = "../InícioLogado/InícioLogado.html";
    }

    /*Médico*/
    if(email == "caike@gmail.com" && senha == "123456" && escolher == "Médico") {
        alert('Você foi logado com sucesso! Redirecionando para Médico');
        location.href = "../Caio/MÉDICO.html";
    }

    /*Admin*/
    if(email == "wellington@gmail.com" && senha == "1234" && escolher == "Administrador") {
        alert('Você foi logado com sucesso! Redirecionando para Admin...');
        location.href = "../Início/Início.html";
    } else {
        alert("Email ou senha inválidos");
    }
}
