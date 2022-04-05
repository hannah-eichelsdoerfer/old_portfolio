"use strict";

import { indexProjects } from "./data.js";

// Smooth nav link transition
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

console.log("HIII");

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

// Capitalize
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// JavaScript Data Projects
const projectsContainer = document.querySelector(".projects");
const theme2 = localStorage.getItem("darkMode");

indexProjects.forEach((project) => {
  const projectCard = `
    <div class="project-card" id="${project.title.split(" ").join("-")}">
      <img src="${
        theme2 === "dark" ? project.imgDark : project.imgLight
      }" alt="">
      <div class="pc-content">
        <h4>${project.title}</h4>
        <p><small>${project.description}</small></p>
      </div>
    </div>
  `;
  projectsContainer.insertAdjacentHTML("afterbegin", projectCard);
});

// MODALS ON CARDS
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const projectCards = document.querySelectorAll(".project-card");

const createModal = (clicked) => {
  const projectModal = indexProjects.find(
    (project) => project.title.split(" ").join("-") === clicked
  );
  const modal = `<div class="modal ${
    theme2 === "dark" ? "dark-card" : ""
  }" id="">
  <button class="close-modal">&times;</button>
  <h1>${projectModal.title}</h1>
  <p>
    ${projectModal.programmingLangues.join("")}
  </p>
  <p>${projectModal.modalContent.info}</p>
  <div class="project-card-links">
    <a href="${
      projectModal.github
    }" target="blank">Github <i class="fab fa-github"></i></a>
    <a href="${
      projectModal.live
    }" target="blank">Live <i class="fas fa-external-link-alt"></i></a>
  </div>
  <div class="modal-content">
    <div>
      <img src="${projectModal.modalContent.cover}" alt="">
    </div>
    ${projectModal.modalContent.showcase.join("")}
  </div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", modal);
};

{
  /* <img
  src="${ theme2 === 'dark' ? projectModal.imgDark : projectModal.imgLight}"
  alt=''
></img>; */
}

projectCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    createModal(event.currentTarget.id);
    document.querySelector("body").style.overflow = "hidden";
    overlay.classList.remove("hidden");
    const closeBtn = document.querySelector(".close-modal");
    closeBtn.addEventListener("click", closeModal);
  });
});

// const openModal = (modal) => {
//   // modal.classList.remove("hidden");
//   const data = document.getElementById(`${modal}Modal`);
//   data.classList.remove('hidden');
//   overlay.classList.remove('hidden');
//   document.querySelector('body').style.overflow = 'hidden';
// };

const closeModal = () => {
  document.querySelector(".modal").remove();
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflow = "visible";
};

// const closeModal = (target) => {
//   target.classList.add("hidden");
// };

// projectCards.forEach((card) => {
//   card.addEventListener('click', (event) => {
//     openModal(event.currentTarget.id);
//   });
// });

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal(); // event.key === "Escape" && closeModal();
});

// Dark Mode Toggle
let theme = localStorage.getItem("darkMode");
const body = document.querySelector("body");
const themeToggle = document.querySelector("label");
const sun = document.querySelector(".sun-icon");
const moon = document.querySelector(".moon-icon");

// More Dark Mode
const customButtons = document.querySelectorAll(".custom-button");
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

// const test = indexProjects.find((element) => element.title === "localshopper");
// console.log(test);

const darkThings = function () {
  projectCards.forEach((card) => {
    card.classList.toggle("dark-card");
  });
  customButtons.forEach((button) => {
    button.classList.toggle("dark-btn");
  });
  inputs.forEach((input) => {
    input.classList.toggle("dark-form");
  });
  textarea.classList.toggle("dark-form");
  // modal.classList.toggle('dark-card');
  // modals.forEach((modal) => {
  //   modal.classList.toggle('dark-card');
  // });
};

// Default:
sun.classList.add("hidden");

const toggleDarkMode = () => {
  body.classList.toggle("bg-dark");
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
  darkThings();
};

themeToggle.addEventListener("click", () => {
  theme = localStorage.getItem("darkMode");

  projectCards.forEach((card) => {
    const cardImage = card.querySelector("img");
    const idAttribute = card.getAttribute("id").split(" ").join("-");
    const test = indexProjects.find(
      (element) => element.title === `${idAttribute.split("-").join(" ")}`
    );

    console.log(test);
    // cardImage.src.replace(/.*(?=images)/, "") === test.imgLight ? cardImage.src = test.imgLight : cardImage.src = test.imgDark;
    theme === "dark"
      ? (cardImage.src = test.imgLight)
      : (cardImage.src = test.imgDark);
  });

  if (theme !== "dark") {
    toggleDarkMode();
    theme = localStorage.setItem("darkMode", "dark");
    // console.log(theme);
  } else {
    toggleDarkMode();
    theme = localStorage.setItem("darkMode", null);
    // console.log(theme);
  }
});

// Check dark mode is on or off on page reload
if (theme === "dark") {
  toggleDarkMode();
  sun.classList.remove("hidden");
}

// Horizontal Scroll
const projects = document.querySelector(".projects");
// console.log(projects);

if (window.screen.width >= 1200) {
  projects.addEventListener("wheel", (ev) => {
    ev.preventDefault(); // stop scrolling in another direction
    projects.scrollLeft += ev.deltaY + ev.deltaX;
  });
  projects.addEventListener("DOMMouseScroll", (ev) => {
    ev.preventDefault(); // stop scrolling in another direction
    projects.scrollLeft += ev.deltaY + ev.deltaX;
  });
}

// window.addEventListener('resize', (event) => {
//   console.log(event.currentTarget)
//   if (window.screen.width >= 1200) {
//     console.log("Resizing to big screensize 🎉")
//     horizontalScroll();
//   }
// }, true);

// Tests to check if end of horizontal scroll
// if (!ev.shiftKey) {}
// while (projects.scrollLeft < 1200) {
//   ev.preventDefault();
//   projects.scrollLeft += (ev.deltaY + ev.deltaX);
// }

// if (projects.scrollLeft >= 1100) {
//   console.log("THE END");
// }

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

particlesJS.load(
  "particles-js",
  "../particles.js-master/particles.json",
  function () {
    // console.log('callback - particles.js config loaded');
  }
);
