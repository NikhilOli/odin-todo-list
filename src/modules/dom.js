import { addTodo, deleteTodo, editTodo, getProjects, toggleTodo } from "./projects";


const app = document.querySelector("#app");

export function renderProjects() {
    app.replaceChildren();
    const projects = getProjects();
projects.forEach((project, projectIndex) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    const heading = document.createElement("h1");
    heading.textContent = project.name;
    projectContainer.appendChild(heading)
    project.todos.forEach((todo, todoIndex) => {
        const todoTitle = document.createElement("p");
        todoTitle.textContent = todo.title;
        const button = document.createElement("button");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        if (todo.completed) {
            todoTitle.classList.add("completed");
        }
        button.textContent = todo.completed ? "Undo" : "Complete";
        deleteBtn.textContent = "Delete";
        editBtn.textContent = "Edit";
        projectContainer.append(todoTitle, button, deleteBtn, editBtn);
        button.addEventListener("click", () => {
            toggleTodo(projectIndex, todoIndex)
            renderProjects()
        })
        deleteBtn.addEventListener("click", () => {
            deleteTodo(projectIndex, todoIndex)
            renderProjects()
        })
        editBtn.addEventListener("click", () => {
            const updatedTodo = prompt();
            if (updatedTodo === null) {
                return;
            }
            editTodo(projectIndex, todoIndex, updatedTodo)
            renderProjects()
        })
    })
    // Create Add Task form
const todoForm = document.createElement("form");
todoForm.classList.add("todo-form");

const todoInput = document.createElement("input");
todoInput.type = "text";
todoInput.placeholder = "Enter task title";
todoInput.required = true;

const addTodoButton = document.createElement("button");
addTodoButton.type = "submit";
addTodoButton.textContent = "Add Task";

// Add elements to form
todoForm.append(todoInput, addTodoButton);

// Add form to project container
projectContainer.appendChild(todoForm);
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();


    const title = todoInput.value.trim();

    if (!title) return;

    addTodo(projectIndex, title);
    renderProjects();

    todoForm.reset();
});
    app.appendChild(projectContainer)
})
}
