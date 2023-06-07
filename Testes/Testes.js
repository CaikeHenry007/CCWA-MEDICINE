function procurar() {
    var id = document.getElementById('id').value;
    var teste = [
        { "id": "12345" }
    ];

    redic = document.getElementById("redic");

    if (id == teste[0].id) {
        redic.innerHTML = "Lote encontrado!";
    return redi();
    } else {
        redic.innerHTML = "Lote n encontrado!";
    }
}

function redi() {event.preventDefault();
    window.location.href="../Início/Início.html";
}

