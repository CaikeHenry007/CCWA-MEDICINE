//Evento para abrir a SubTela
document.getElementById("Relat1").addEventListener("click", function () {
    abrirSubTela();
});

//Evento para fechar a SubTela
document.getElementById("close").addEventListener("click", function () {
    fecharSubTela();
});

function abrirSubTela() {
    document.getElementById("subTela").style.display = "block";
}

function fecharSubTela() {
    document.getElementById("subTela").style.display = "none";
}