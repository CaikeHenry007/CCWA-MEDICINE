function Funcao() {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var rg = document.getElementById('rg').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var sexo = document.getElementById('sexo').value;


    /*Apenas paciente*/
    if (nome == "Ana Julia Ferreira"
        && cpf == "123456789-0"
        && rg == "987654321-0"
        && telefone == "55-19-123456789"
        && email == "ferreira@gmail.com"
        && senha == "123456"
        && senha2 == senha
        && estado == "São Paulo"
        && cidade == "Nova Odessa"
        && sexo == "Feminino") {
        alert('Você foi logado com sucesso! Redirecionando para Admin...');
        location.href = "../InícioLogado/InícioLogado.html";
    } else {
        alert("Email ou senha inválidos");
    }

}
