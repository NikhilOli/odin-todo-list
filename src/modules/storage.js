


export function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
} 

export function loadProjects() {
    const restoreProjects = localStorage.getItem("projects");
    if (restoreProjects === null) {
        return [];
    }
    return JSON.parse(restoreProjects);
} 