const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const contactBtn = document.getElementById("ContactUsBtn");
const knowMoreBtn = document.getElementById("knowMoreBtn");

// Toggle navigation menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when clicking on a navigation link
document.querySelectorAll(".nav__links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Contact Us button action
contactBtn.addEventListener("click", () => {
  document.getElementById("Contactus").scrollIntoView({ behavior: "smooth" });
});

// Know More button action
knowMoreBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Swiper initialization with responsive breakpoints
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

// Add scroll reveal animations
ScrollReveal().reveal('.header__content', { 
  duration: 1000,
  distance: '50px',
  origin: 'bottom'
});

ScrollReveal().reveal('.service__card', { 
  duration: 1000,
  distance: '30px',
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.card', { 
  duration: 1000,
  distance: '30px',
  origin: 'bottom',
  interval: 100
});

// Fix for viewport height issues on mobile
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set the value on resize and initial load
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);
setVh();

// Ensure images load properly on all devices
function handleImageErrors() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });
}

window.addEventListener('load', handleImageErrors);
