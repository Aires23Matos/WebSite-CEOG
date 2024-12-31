document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    if (name.length > 30 || subject.length > 30) {
        alert('Os campos "Seu Nome" e "Subject" devem ter no máximo 30 caracteres.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

   
    alert('Formulário enviado com sucesso!');
   
    this.submit();
});