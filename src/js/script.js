let emailValue;

document.querySelector(".contact__form__input").addEventListener("input", function () {
    emailValue = document.querySelector(".contact__form__input").value;
});

/*function sendEmail() {
  let params = {
    email: emailValue,
  };

  emailjs.send("service_bs364yq", "template_j7hudjg", params);
}*/

//document.querySelector(".contact__form").addEventListener("submit", sendEmail());

let burgerMenu = document.querySelector(".header__menu-list");
let burgerOpen = document.querySelector(".header__burger");
let burgerClose = document.querySelector(".header__close-burger");

burgerOpen.addEventListener("click", function () {
  burgerMenu.style.display = "flex";
  burgerOpen.style.display = "none";

});
burgerClose.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  burgerOpen.style.display = "block";
});