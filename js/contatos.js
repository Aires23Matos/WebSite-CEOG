const form = document.querySelector('form');
const fulltName =document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Nome: ${fulltName.value}<br> Email: ${email.value}
  <br>Message: ${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "airesmatos54@gmail.com",
        Password : "2F11F20F3B8771FB8DA08D5BF1F48D3A40A3",
        To : 'airesmatos54@gmail.com',
        From : "airesmatos54@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(message => showAlert("Mensagem enviada")
  );
}

function checkInputs(){
  const items = document.querySelectorAll("item");

  for (const item of items){
    if(item.value ===""){
      item.classList.add('error');
      item.parentElement.classList.add("error");
    }

    if(items[1].value !== ""){
      checkEmails();
    }

    items[1].addEventListener("keyup", () => {
      checkEmails();
    })

    item.addEventListener("keyup", () => {
      if(item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }else{
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    })
  }
}

function checkEmails(){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

  }else{
    email.classList.add("error");
    email.parentElement.classList.remove("error");
  }
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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fulltName.classList.contains("error") && !email.classList.contains("error") 
    && !subject.classList.contains("error") && !message.classList.contains("error")){
      sendEmail();

      form.reset();
      return false;
    } 
    
})