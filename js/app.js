'use strict';

// Smooth nav link transition
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dropdown Menu Mobile
const dropdown = document.querySelector(".hamburger");
const dropdownLinks = document.querySelector("#navbar-links");
// console.log(dropdownLinks);

dropdown.addEventListener("click", (event) => {
  // console.log(event);
  dropdownLinks.classList.toggle("show");
  if (dropdownLinks.classList.contains("show")) {
    dropdown.innerHTML = "<i class='fas fa-times'></i>";
  } else {
    dropdown.innerHTML = "<i class='fas fa-bars'></i>";
  }
});

// Animate on Scroll
AOS.init({
  disable: function () {
    var maxWidth = 760;
    return window.innerWidth < maxWidth;
  },
});

// Typed.js
const header = document.querySelector("#typing");

let typed = new Typed(header, {
  strings: [
    "Full-stack Developer",
    "Front-end",
    "Back-end",
    "Problem-Solver",
    "Creative Solutions",
    "Enthusiastic Learner",
    "Freelancer",
  ],
  loop: true,
  typeSpeed: 90,
});

// MODALS ON CARDS
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeBtns = document.querySelectorAll(".close-modal");
const projectCards = document.querySelectorAll(".project-card");

const openModal = (modal) => {
  // modal.classList.remove("hidden");
  const data = document.getElementById(`${modal}Modal`);
  data.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector("body").style.overflow = 'hidden';
};

const closeModal = () => {
  modals.forEach ((modal) => {if (!modal.classList.contains("hidden")) modal.classList.add("hidden")});
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflow = 'visible';
};

// const closeModal = (target) => {
//   target.classList.add("hidden");
// };

projectCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    openModal(event.currentTarget.id);
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal(); // event.key === "Escape" && closeModal();
});

// Dark Mode Toggle
let theme = localStorage.getItem("darkMode");
const body = document.querySelector('body');
const themeToggle = document.querySelector("label");
const sun = document.querySelector(".sun-icon");
const moon = document.querySelector(".moon-icon");

// More Dark Mode
const customButtons = document.querySelectorAll(".custom-button");
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

const darkThings = function() {
  projectCards.forEach(card => {
    card.classList.toggle("dark-card");
  });
  customButtons.forEach(button => {
    button.classList.toggle("dark-btn")
  });
  inputs.forEach(input => {
    input.classList.toggle("dark-form")
  });
  textarea.classList.toggle("dark-form");
  modals.forEach(modal => {
    modal.classList.toggle("dark-card");
  })
};

// Default: 
sun.classList.add("hidden");

const toggleDarkMode = () => { 
  body.classList.toggle('bg-dark');
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
  darkThings();
};

themeToggle.addEventListener("click", () => {
  theme = localStorage.getItem("darkMode");

  if (theme !== "dark") {
    toggleDarkMode();
    theme = localStorage.setItem("darkMode", "dark");
    // console.log(theme);
  } else {
    toggleDarkMode();
    theme = localStorage.setItem('darkMode', null);
    // console.log(theme);
  }
});

// Check dark mode is on or off on page reload
if(theme === 'dark') {
  toggleDarkMode();
  sun.classList.remove("hidden");
};

// Horizontal Scroll
const projects = document.querySelector(".projects")

projects.addEventListener('wheel', (ev) => {
  ev.preventDefault();  // stop scrolling in another direction
  projects.scrollLeft += (ev.deltaY + ev.deltaX);
  // if (!ev.shiftKey) {}
  // while (projects.scrollLeft < 1200) {
  //   ev.preventDefault();
  //   projects.scrollLeft += (ev.deltaY + ev.deltaX);
  // }
  
  // if (projects.scrollLeft >= 1100) {
  //   console.log("THE END");
  // }
});


projects.addEventListener("DOMMouseScroll", (ev) => {
  ev.preventDefault();  // stop scrolling in another direction
  projects.scrollLeft += (ev.deltaY + ev.deltaX);
});

// document.addEventListener('wheel', function(e)
// {
//   if(e.type != 'wheel')
//   {
//     return;
//   }
//   let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
//   delta = delta * (-300);
//   document.documentElement.scrollLeft -= delta;    
//   // safari needs also this
//   document.body.scrollLeft -= delta;    
//   e.preventDefault();
// });

// Particle Background
// const particles = document.querySelector("#particles-js");
// particles.addEventListener("click", () => {
//   particlesJS.load('particle-div','particle-cfg.json');  
// });

particlesJS.load('particles-js', '../particles.js-master/particles.json', function() {
  // console.log('callback - particles.js config loaded');
});

