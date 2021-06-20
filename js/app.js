document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const dropdown = document.querySelector(".hamburger");
const dropdownLinks = document.querySelector("#navbar-links");
// console.log(dropdownLinks);

dropdown.addEventListener('click', (event) => {
  // console.log(event);
  dropdownLinks.classList.toggle('show');
  if (dropdownLinks.classList.contains('show')) {
    dropdown.innerHTML = "<i class='fas fa-times'></i>";
  } else {
    dropdown.innerHTML = "<i class='fas fa-bars'></i>";
  }
});


// PROJECT CARDS
// let projectDescription = document.createElement("p");

// let replace = document.createElement("div")

// const projectCards = document.querySelectorAll('.project-card');
// projectCards.forEach((projectCard) => {
//   projectCard.addEventListener("mouseover", (element) => {
//     element.currentTarget.classList.add("bg-light");
//     let image = element.querySelector("img");
//     image.replaceWith(replace);
//   });
// });

// projectCards.forEach((projectCard) => {
//   projectCard.addEventListener("mouseout", (element) => {
//     element.currentTarget.classList.remove("bg-light");
//   });
// });

