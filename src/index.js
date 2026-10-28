import { renderProjects } from "./modules/dom";
import { addProject, addTodo, deleteTodo, editTodo, getProjects, toggleTodo } from "./modules/projects";
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

addProject("JavaScript Learning");
addProject("Personal");
addTodo(0, "Practice arrays");
addTodo(0, "Learn closures");
addTodo(0, "Practice factory functions");
addTodo(5, "Learn React");
addTodo(1, "Practice coding");
getProjects().push("Invalid project");

addProject("JavaScript");
renderProjects();
addProject("JavaScript");
renderProjects();
toggleTodo(0,1)
addProject("Personal");
renderProjects();

addProject("React");
renderProjects();

console.log(getProjects());    