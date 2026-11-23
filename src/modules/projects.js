import { loadProjects, saveProjects } from "./storage";

const projects = loadProjects();
console.log("Loaded projects:", projects);
console.log("Data type:", typeof projects);
console.log("Is array?", Array.isArray(projects));

export function addProject(project) {

    const newProject = {
        name: project,
        todos: []
    }
    projects.push(newProject);
    saveProjects(projects)
    return newProject;
}

export function addTodo(projectIndex, title) {
    if (!projects[projectIndex]) {
        console.log("Project not found");  
        return;     
    }
    projects[projectIndex].todos.push({
        title,
        completed: false
    })
    saveProjects(projects)
}
export function getProjects() {
    return structuredClone(projects);
}

export function deleteTodo(projectIndex, todoIndex) {
    if (!projects[projectIndex]) {
        return;
    }
    const todo = projects[projectIndex].todos
    [todoIndex];
    if (!todo) {
        return
    }
    projects[projectIndex].todos.splice(todoIndex,1);
    saveProjects(projects)
}
export function toggleTodo(projectIndex, todoIndex) {
    if (!projects[projectIndex]) {
        return;
    }
    const todo = projects[projectIndex].todos
    [todoIndex];
    if (!todo) {
        return
    }
    todo.completed = !todo.completed;
    saveProjects(projects)
}
export function editTodo(projectIndex, todoIndex, newTitle) {
    if (!projects[projectIndex]) {
        return;
    }
    const todo = projects[projectIndex].todos
    [todoIndex];
    if (!todo) {
        return
    }
    if (!newTitle.trim()) {
    console.log("Title cannot be empty!");
    return;
    }
    todo.title = newTitle.trim();
    saveProjects(projects)
}