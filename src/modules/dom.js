import { getProjects } from "./projects";


const app = document.querySelector("#app");
export function renderProjects() {
    app.replaceChildren();
    const projects = getProjects();
projects.forEach(project => {
    const projetContainer = document.createElement("div");
    projetContainer.classList.add("project");
    const heading = document.createElement("h1");
    heading.textContent = project.name;
    projetContainer.appendChild(heading)
    project.todos.forEach(todo => {
        const todoTitle = document.createElement("p");
        todoTitle.textContent = todo.title;
        if (todo.completed == true) {
            
            todoTitle.classList.add("completed");
        }
        projetContainer.appendChild(todoTitle)
    })
    app.appendChild(projetContainer)
})
}
