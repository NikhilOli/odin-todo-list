import { renderProjects } from "./modules/dom";
import { addProject} from "./modules/projects";
import "./style.css";

const projectForm = document.querySelector("#project-form");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const projectInput = document.querySelector("#project-name");
  const name = projectInput.value.trim();

  if (!name) return;

  addProject(name);
  renderProjects();

  projectForm.reset();
});

renderProjects();
