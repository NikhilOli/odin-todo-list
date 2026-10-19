
export const projects = [];

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