const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

//Know More Button
document.getElementById('knowMoreBtn').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
  });
});

//Contact Us Button
document.getElementById('ContactUsBtn').addEventListener('click', function() {
  document.getElementById('Contactus').scrollIntoView({
      behavior: 'smooth'
  });
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

