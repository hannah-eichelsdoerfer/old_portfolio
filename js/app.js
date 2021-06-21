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

AOS.init({
  disable: function() {
    var maxWidth = 760;
    return window.innerWidth < maxWidth;
  }
});

header = document.querySelector("#typing");

let typed = new Typed(header, {
  strings: ['Full-stack Developer', 'Front-end', 'Back-end', 'Problem-Solver', 'Creative Solutions', 'Enthusiastic Learner', 'Freelancer'],
  loop: true,
  typeSpeed: 90
});
