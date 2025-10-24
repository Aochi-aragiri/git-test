const btnElem = document.querySelector(".nav-toggle-btn");
const navElem = document.querySelector(".nav");

btnElem.onclick = function () {
  const isOpen = navElem.classList.toggle("nav_open");

  if (isOpen === true) {
    btnElem.textContent = "Close";
  } else {
    btnElem.textContent = "Open";
  }
};
