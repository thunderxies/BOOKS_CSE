const closeButton = document.querySelector(".close-icon");
const body = document.querySelector("body");
const helpButton = document.querySelector(".sticky");
const helpForm = document.querySelector(".help-form");
const cancelButton = document.querySelector(".cancel");
const upwardsButton = document.querySelector(".sticktobottom");
const downloadButtons = document.querySelectorAll(".btn").forEach((btn) =>
  btn.addEventListener("click", function () {
    alert(
      "It may take 5-10 seconds for the download to start.\nPress OK to confirm"
    );
  })
);

//------------------------------------------------------------------------------------
const box = document.querySelectorAll(".box");
const downArrow = document.querySelectorAll(".down-arrow");
const upArrow = document.querySelectorAll(".up-arrow");
const trigger = document.querySelectorAll(".trigger");
for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener("click", function () {
    box[i].classList.toggle("hide");
    box[i].classList.toggle("unhide");
    downArrow[i].classList.toggle("hidden");
    upArrow[i].classList.toggle("hidden");
  });
}

helpButton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  cancelButton.classList.toggle("hidden");
  helpButton.classList.toggle("hidden");
  helpForm.classList.toggle("help-form-transform");
});

cancelButton.addEventListener("click", function () {
  cancelButton.classList.toggle("hidden");
  helpButton.classList.toggle("hidden");
  helpForm.classList.remove("help-form-transform");
});

upwardsButton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

//Counter------------------------------------------------
const counter = document.querySelector(".countNum");

var count;
function clicked() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.countapi.xyz/update/mdmusaibalibooksvilla.com/mdmusaibalibooksvilla.com?amount=1"
  );
  xhr.responseType = "json";
  xhr.onload = function () {
    count = this.response.value;
    counter.textContent = count;
  };
  xhr.send();
}
clicked();
