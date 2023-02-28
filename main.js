const form = document.getElementById("form-numero");

let formEValido = false;


function decidirSucesso (primeiroNumero, segundoNumero) {
    const maiorNumero = segundoNumero > primeiroNumero;
    return maiorNumero
}


form.addEventListener("submit", function(e) {
    
    
    e.preventDefault()
    
    let primeiroNumero = parseFloat (document.getElementById("n1").value)
    let segundoNumero = parseFloat (document.getElementById("n2").value)
    
    const mensagemSucesso = `O número: <b>${segundoNumero}</b> é maior que: <b>${primeiroNumero}</b> Parabéns! Formulário enviado com sucesso`;

    formEValido = decidirSucesso(primeiroNumero, segundoNumero)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
        
        primeiroNumero.value = "";
        segundoNumero.value = "";
        }else {
            
            document.querySelector(".error-message").style.display = "block";
        }
    
    });

