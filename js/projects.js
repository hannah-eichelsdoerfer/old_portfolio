'use strict';

import { programmingLanguages, projects } from './data.js';

const projectsContainer = document.querySelector('.more-projects');

const displayProjects = (projects) => {
  projectsContainer.innerHTML = '';
  projects.forEach((project) => {
    const projectCard = `
    <div class="project-card">
      <div class="project-card-content">
        <div>
          <h4 class="project-title">${project.title}</h4>
          ${project.programmingLangues.join('')}
          <p class="project-description"><small>${
            project.description
          }</small></p>
        </div>
      </div>
    </div>`;
    projectsContainer.insertAdjacentHTML('beforeend', projectCard);
  });
};

displayProjects(projects);

/* <div class="project-card-links">
  <a href="${project.githubLink}" target="blank"><i class="fab fa-github"></i></a>
  <a href="${project.liveLink}" target="blank"><i class="fas fa-external-link-alt"></i></a>
</div> */

// Dark Mode Toggle
let theme = localStorage.getItem('darkMode');
const body = document.querySelector('body');
const themeToggle = document.querySelector('label');
const sun = document.querySelector('.sun-icon');
const moon = document.querySelector('.moon-icon');

// More Dark Mode
const projectCards = document.querySelectorAll('.project-card');
const customButtons = document.querySelectorAll('.custom-button');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

// const test = indexProjects.find((element) => element.title === "localshopper");
// console.log(test);

const darkThings = function () {
  projectCards.forEach((card) => {
    card.classList.toggle('dark-card');
  });
  customButtons.forEach((button) => {
    button.classList.toggle('dark-btn');
  });
  inputs.forEach((input) => {
    input.classList.toggle('dark-form');
  });
};

// Default:
sun.classList.add('hidden');

const toggleDarkMode = () => {
  // console.log(body.classList)
  body.classList.toggle('bg-dark');
  moon.classList.toggle('hidden');
  sun.classList.toggle('hidden');
  // console.log("TEEEEST");
  darkThings();
};

themeToggle.addEventListener('click', () => {
  theme = localStorage.getItem('darkMode');

  // projectCards.forEach(card => {
  //   const cardImage = card.querySelector("img");
  //   const idAttribute = card.getAttribute("id");
  //   const test = indexProjects.find((element) => element.title === `${idAttribute}`);
  //   // cardImage.src.replace(/.*(?=images)/, "") === test.imgLight ? cardImage.src = test.imgLight : cardImage.src = test.imgDark;
  //   theme === 'dark' ? cardImage.src = test.imgLight : cardImage.src = test.imgDark;
  // });

  if (theme !== 'dark') {
    toggleDarkMode();
    theme = localStorage.setItem('darkMode', 'dark');
    // console.log(theme);
  } else {
    toggleDarkMode();
    theme = localStorage.setItem('darkMode', null);
    // console.log(theme);
  }
});

// Check dark mode is on or off on page reload
if (theme === 'dark') {
  toggleDarkMode();
  sun.classList.remove('hidden');
}

// Filter programming Languages to see only projects in this language

const languages = document.querySelector('#filter-languages');

languages.insertAdjacentHTML('afterbegin', programmingLanguages.join(''));

const svgElements = document.querySelectorAll('svg');

svgElements.forEach((svg) => {
  svg.addEventListener('click', (event) => {
    const clickedLanguage = svg.getAttribute('id');
    const mytest = [];

    projects.forEach((project) => {
      project.programmingLangues.forEach((p) => {
        if (p.includes(clickedLanguage)) {
          mytest.push(project);
        }
      });
    });

    displayProjects(mytest);

    svgElements.forEach((element) => {
      element.classList.remove('filter');
    });

    event.currentTarget.classList.add('filter');

    const filteredLanguage = document.querySelector('.filter');

    filteredLanguage &&
      filteredLanguage.addEventListener('click', (event) => {
        filteredLanguage.classList.remove('filter');
        displayProjects(projects);
      });

      // WHY ARE SVG ONLY CLICKABLE ONCE ON AND OFF?

    // const filteredProjects = projects.filter((project) => {
    //   project.programmingLangues.forEach((p) => {
    //     console.log(p.includes(clickedLanguage));
    //   });
    //   return project.programmingLangues.forEach((p) =>
    //     p.includes(clickedLanguage)
    //   );
    // });
  });
});
