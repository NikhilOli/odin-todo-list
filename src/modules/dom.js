import { getProjects, toggleTodo } from "./projects";


const app = document.querySelector("#app");
export function renderProjects() {
    app.replaceChildren();
    const projects = getProjects();
projects.forEach((project, projectIndex) => {
    const projetContainer = document.createElement("div");
    projetContainer.classList.add("project");
    const heading = document.createElement("h1");
    heading.textContent = project.name;
    projetContainer.appendChild(heading)
    project.todos.forEach((todo, todoIndex) => {
        const todoTitle = document.createElement("p");
        todoTitle.textContent = todo.title;
        const button = document.createElement("button");
        if (todo.completed) {
            todoTitle.classList.add("completed");
        }
        button.textContent = todo.completed ? "Undo" : "Complete";
        projetContainer.appendChild(todoTitle)
        projetContainer.appendChild(button)
        button.addEventListener("click", () => {
            toggleTodo(projectIndex, todoIndex)
            renderProjects()
        })
    })
    app.appendChild(projetContainer)
})
}
