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
header = document.querySelector("#typing");

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
