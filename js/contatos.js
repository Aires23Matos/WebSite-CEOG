document.getElementById('contactForm').addEventListener('submit',async function(event) {
    // (function() {
    //     //Public key
    //   emailjs.init("g-Jtn9Cm9t6rlykAF");
    // })();
    event.preventDefault();
   
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById("message").value;
  
    // const templateParams = {
    //     from_name: name,
    //     from_email: email,
    //     message: message,
    //     to_name:" Email Js demo"
    // };

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
   
    // console.log(templateParams);

    // emailjs.send("service_5tjpajm", "template_3zcgfvt", templateParams)
    // .then(function(response) {
    // console.log('SUCCESS!', response.status, response.text);
    // alert('Message sent successfully!');
    // }, function(error) {
    // console.log('FAILED...', error);
    // alert('Message failed to send.');
    // });
    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: email,
                subject: `Mensagem de ${name}: ${subject}`,
                text: message,
                html: `<p><strong>De:</strong> ${name} (${email})</p><p>${message}</p>`
            }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        } else {
            alert(`Erro ao enviar mensagem: ${result.error}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    }
    
});



