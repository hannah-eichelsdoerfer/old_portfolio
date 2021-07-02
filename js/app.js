document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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

AOS.init({
  disable: function () {
    var maxWidth = 760;
    return window.innerWidth < maxWidth;
  },
});

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


// Cards Modal Popup
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeBtns = document.querySelectorAll(".close-modal");
const projectCards = document.querySelectorAll(".project-card");

const openModal = (modal) => {
  // modal.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  const data = document.getElementById(`${modal}Modal`);
  data.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeModal = (target) => {
  target.classList.add("hidden");
  overlay.classList.add("hidden");
}

projectCards.forEach(card => {
  card.addEventListener("click", (event) => {
    openModal(event.currentTarget.id);
  });
});

closeBtns.forEach (closeBtn => {
  closeBtn.addEventListener("click", (event) => {
    closeModal(event.currentTarget.parentNode);
  });
  
})
overlay.addEventListener("click", (event) => {
  modals.forEach ((modal) => {closeModal(modal)});
});