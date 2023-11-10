$(function() {
    // Inicializa o datepicker
    $("#calendario").datepicker();
});

function mostrarPopup(mensagem) {
    var popup = document.getElementById("popup");
    var mensagemErro = document.getElementById("mensagem-erro");

    mensagemErro.textContent = mensagem;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var data = document.getElementById("calendario").value;
    var curso = document.getElementById("opcoes1").value;
    var horario = document.getElementById("opcoes4").value;
    var datashow = document.getElementById("DataShow").value;

    if (nome === "" || data === "" || curso === "opcao1" || horario === "" || datashow === "") {
        mostrarPopup("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
}
