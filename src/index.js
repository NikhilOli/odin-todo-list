import { addProject, addTodo, deleteTodo, editTodo, getProjects, toggleTodo } from "./modules/projects";
import "./style.css";

addProject("JavaScript Learning");
addProject("Personal");
addTodo(0, "Practice arrays");
addTodo(0, "Learn closures");
addTodo(0, "Practice factory functions");
addTodo(5, "Learn React");
addTodo(1, "Practice coding");
getProjects().push("Invalid project");

addProject("JavaScript");
console.log(getProjects());
