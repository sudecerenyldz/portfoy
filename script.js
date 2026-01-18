const toggleBtn = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".menu");

function handleToggle(e) {
  e.preventDefault();
  e.stopPropagation();
  menu.classList.toggle("active");
}

toggleBtn.addEventListener("click", handleToggle);
toggleBtn.addEventListener("touchstart", handleToggle, { passive: false });

function handleOutsideClick(e) {
  if (menu.classList.contains("active")) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnButton = toggleBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menu.classList.remove("active");
    }
  }
}

document.addEventListener("touchstart", handleOutsideClick, { passive: false });
document.addEventListener("mousedown", handleOutsideClick);

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("active"));
});
