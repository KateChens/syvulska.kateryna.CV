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

const successModal = document.getElementsByClassName("contact__success-window")[0];
const successModalCloseBtn = document.getElementsByClassName("contact__success-window_icon-close")[0];

successModalCloseBtn.addEventListener("click", () => {
  successModal.style.display = "none";
  settingsForModalsClose();
});

function sendEmail() {
  let params = {
    from_name: document.getElementById("form-name").value,
    email: document.getElementById("form-email").value,
  };

  emailjs.send("service_bs364yq", "template_j7hudjg", params)
    .then(function (res) {
      console.log('Succesfully Sent ' + res.status);
      document.getElementById("form-name").value = "";
      document.getElementById("form-email").value = "";
      settingsForModalsOpen();
      successModal.style.display = "block";
  })

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