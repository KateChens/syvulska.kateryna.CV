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
      updateInputs(document.getElementById("form-name"));
      updateInputs(document.getElementById("form-email"));

      document.getElementsByClassName("contact__form__button")[0].disabled = true;
      settingsForModalsOpen();
      successModal.style.display = "block";
  })
}

function updateInputs(input) {
  input.value = "";
  input.classList.add("success");
  input.classList.remove("successful");
}

//validation start

document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll(".contact__form__input");

  formInputs.forEach(function (input) {
    if (input.type == "text" || input.type == "email") {
      input.addEventListener("blur", () => {
        if (input.value === "") {
          formAddError(input);
        } else {
          formValidateField(input);
        }
      });
    }
  });
});

document.getElementById("contact").addEventListener("click", function () {
  let hasError = document.querySelectorAll(".error").length + document.querySelectorAll(".success").length > 0;
  if (!hasError) {
    document.getElementsByClassName("contact__form__button")[0].disabled = false;
  } else {
    document.getElementsByClassName("contact__form__button")[0].disabled = true;
  }
})

function formValidateField(input) {
  if (input.classList.contains("name")) {
    let value = input.value.trim();
    if (value.length < 2) {
      formAddError(input);
    } else {
      formRemoveError(input);
    }
  }
  if (input.classList.contains("email")) {
    if (testEmail(input)) {
      formAddError(input);
    } else {
      formRemoveError(input);
    }
  }
}

function formAddError(input) {
  input.classList.add("error");
  input.classList.remove("success");
  input.classList.remove("successful");
  let label = document.querySelector(`label[for='${input.name}']`);
  if (label) {
    label.classList.add("active-error");
  }
}
function formRemoveError(input) {
  input.classList.remove("error");
  input.classList.remove("success");
  input.classList.add("successful");
  let label = document.querySelector(`label[for='${input.name}']`);
  if (label) {
    label.classList.remove("active-error");
  }
}
function testEmail(input) {
  return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//validation end

//burger

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
    if (window.innerWidth < 1024) {
      burgerMenu.style.display = "none";
      burgerOpen.style.display = "block";
    }
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

// my projects
let myProjectsImg = document.querySelectorAll(".my-projects__project-container__img");
let myProjectsDescription = document.querySelectorAll(".my-projects__project-container__description");

myProjectsImg.forEach(function (project) {
  project.addEventListener("click", function () {
    let projectDescription = project.nextSibling.nextSibling;
    projectDescription.style.display = "flex";
  })
})

myProjectsDescription.forEach(function (project) {
  project.addEventListener("click", function () {
    project.style.display = "none";
  });
});
