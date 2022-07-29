function  VerificarEntrada() {
    NomeConvidado = document.getElementById("nome").value;
    ConvidadosCristian = ["Amanda", "Sabrina", "Rafael", "Jonas", "Carol","Lara","Jonathan"]
    if(ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById("Permissao").innerText = "Você pode entrar!"
    } else{
        document.getElementById("Permissao").innerText = "Você não pode entrar!"
    }
}