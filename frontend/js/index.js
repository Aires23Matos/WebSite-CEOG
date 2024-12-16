
$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show");
      }, index * 200); // Delay de 0.2s entre cada elemento
    });
  });
