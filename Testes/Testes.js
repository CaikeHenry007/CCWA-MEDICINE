function procurar(){
    var id = document.getElementById('id').value;
    var teste = [
        { "id": "12345" }
    ];

    redic = document.getElementById("redic");

    if (id == teste[0].id) {
        redic.innerHTML = "ID encontrado redirecionando...";
    return redi();
    }
    if (id != teste[0].id) {
        redic.innerHTML = "ID não encontrado. Tente novamente!";
        return testea();
    }
}

function redi() {event.preventDefault();
    window.location.href="../Início/Início.html";
}


function testea() {event.preventDefault();
    window.location.href="./index.html";
}