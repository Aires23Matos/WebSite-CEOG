function subscribeNewsletter() {
    const emailInput = document.getElementById("emailInput").value;
    const messageBox = document.getElementById("message");

    if (!validateEmail(emailInput)) {
       alert("⚠️ Insira um e-mail válido!");
        return;
    }

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "airesmatos54@gmail.com",
        Password : "2F11F20F3B8771FB8DA08D5BF1F48D3A40A3",
        To : 'airesmatos54@gmail.com',
        From : "airesmatos54@gmail.com",
        Subject: "Nova Subscrição na Newsletter",
        Body: `O usuário <b>${emailInput}</b> se Subscreveu na newsletter.`
    }).then(response => {
        showAlert("✅ Subscrição realizada com sucesso!", "success");
        document.getElementById("emailInput").value = ""; // Limpa o campo
    }).catch(error => {
        showAlert("❌ Erro ao se Subscrever. Tente novamente.", "error");
    });
  
}

// Validação de e-mail simples
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showAlert(message, type) {
    const modal = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");

    alertMessage.innerHTML = message;
    alertMessage.className = type;
    modal.style.display = "block";

    setTimeout(() => {
        modal.style.display = "none";
    }, 3000); // Fecha o modal após 3 segundos
}
