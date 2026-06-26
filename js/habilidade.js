
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    const box = this.parentElement;

    this.classList.toggle("active");
    box.classList.toggle("active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});