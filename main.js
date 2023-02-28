const form = document.getElementById("form-numero");
let primeiroNumero = parseFloat (document.getElementById("n1").value)
let segundoNumero = parseFloat (document.getElementById("n2").value)
let formEValido = false;


function decidirSucesso (primeiroNumero, segundoNumero) {
    const maiorNumero = segundoNumero > primeiroNumero;
    return maiorNumero
}


form.addEventListener("submit", function(e) {
    
    
    e.preventDefault()
    
    
    const mensagemSucesso = `O número: <b>${segundoNumero.value}</b> é maior que: <b>${primeiroNumero.value}</b> Parabéns!`;

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

