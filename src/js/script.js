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

const modalsBlur = document.getElementsByClassName("modal-backdrop")[0];
const myCVBody = document.getElementsByTagName("body")[0];

function settingsForModalsOpen() {
  modalsBlur.style.display = "block";
  myCVBody.style.overflow = "hidden";
}
function settingsForModalsClose() {
  myCVBody.style.overflow = "auto";
  modalsBlur.style.display = "none";
}

let burgerMenu = document.querySelector(".header__menu-list");
let burgerOpen = document.querySelector(".header__burger");
let burgerClose = document.querySelector(".header__close-burger");

burgerOpen.addEventListener("click", function () {
  burgerMenu.style.display = "flex";
  burgerOpen.style.display = "none";
  settingsForModalsOpen();
});
burgerClose.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  burgerOpen.style.display = "block";
  settingsForModalsClose();
});

let burgerMenuListItems = document.querySelectorAll(".header__menu-list__item");

burgerMenuListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    settingsForModalsClose();
  });
})

// top-button start
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("on-top").style.display = "block";
  } else {
    document.getElementById("on-top").style.display = "none";
  }
}
// top-button end