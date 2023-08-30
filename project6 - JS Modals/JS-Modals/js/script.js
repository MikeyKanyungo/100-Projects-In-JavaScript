// Mapping html buttons
const modals = document.getElementsByClassName("modal");
const overlays = document.getElementsByClassName("overlay");
const openModalBtns = document.getElementsByClassName("btn-open");
const closeModalBtns = document.getElementsByClassName("btn-close");

// Close modal function
const closeModal = function () {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
    overlays[i].classList.add("hidden");
  }
};

// Attach close event to close buttons
for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", closeModal);
}

// Attach close event to overlays
for (let i = 0; i < overlays.length; i++) {
  overlays[i].addEventListener("click", closeModal);
}

// Close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Open modal function
const openModal = function () {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove("hidden");
    overlays[i].classList.remove("hidden");
  }
};

// Attach open event to open buttons
for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", openModal);
}
