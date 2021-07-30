'use strict';

import { projects } from "./data.js";

const projectsContainer = document.querySelector(".projects");

projects.forEach(project => {
  console.log(project)
  const projectCard = `
  <div class="project-card">
    <div class="project-card-content">
      <div>
        <h4 class="project-title">${project.title}</h4>
        ${project.programmingLangues.join("")}
        <p class="project-description"><small>${project.description}</small></p>
      </div>
      <div class="project-card-links">
        <a href="${project.githubLink}" target="blank"><i class="fab fa-github"></i></a>
        <a href="${project.liveLink}" target="blank"><i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  </div>`;
  projectsContainer.insertAdjacentHTML('beforeend', projectCard);
});