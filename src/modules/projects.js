
const projects = [];

export function addProject(project) {

    const newProject = {
        name: project,
        todos: []
    }
    projects.push(newProject);
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
}