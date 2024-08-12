let emailValue;

document.querySelector(".contact__form__input").addEventListener("input", function () {
    emailValue = document.querySelector(".contact__form__input").value;
});

function sendEmail() {
  let params = {
    email: emailValue,
  };

  emailjs.send("service_bs364yq", "template_j7hudjg", params);
}

//document.querySelector(".contact__form").addEventListener("submit", sendEmail());
