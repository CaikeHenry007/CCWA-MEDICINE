function procurar(){
    var id = document.getElementById('id').value;
    var teste = document.getElementById('teste').value;

    if (id == "12345" && teste == "Covid") {
        alert('Teste encontrado! Redirecionando...');
        location.href = "../Início/Início.html";
    } else {
        alert('Teste não encontrado! Tente novamente...');
    }
}