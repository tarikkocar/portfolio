import "./style.css";

const navItems = document.querySelectorAll("nav a");

function setActiveSection() {
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight
  ) {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    navItems[2].classList.add("active");
  } else if (window.scrollY > document.body.offsetHeight * 0.2) {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    navItems[1].classList.add("active");
  } else {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    navItems[0].classList.add("active");
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setActiveSection();
  });
});

window.addEventListener("scroll", setActiveSection);
