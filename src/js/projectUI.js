const { getTodoUI } = require("./todoUI");
const { todoForm } = require("./todoForm.js");

function loadProject(project) {
  const container = document.querySelector(".projects");

  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }

  if (!project) {
    const p = document.createElement("p");
    p.textContent = "No Projects to Show";
    container.appendChild(p);
    return;
  }

  const projectUI = document.createElement("div");
  const projectTitle = document.createElement("h2");

  projectTitle.textContent = project.title;
  projectUI.id = project.id;
  projectUI.classList.add("project");
  projectUI.appendChild(projectTitle);

  const todosUI = document.createElement("div");
  todosUI.classList.add("todos");

  // console.log(project.todos.length);

  if (project.todos.length > 0) {
    project.todos.forEach((item) => {
      const todoItem = getTodoUI(item, project);
      todosUI.appendChild(todoItem);
    });
  } else {
    const messege = document.createElement("p");
    messege.textContent = "No Todo Items to show";
    todosUI.appendChild(messege);
  }

  const addTodo = document.createElement("button");
  addTodo.textContent = "Add To Do";
  addTodo.setAttribute("ProjectId", project.id);

  addTodo.addEventListener("click", () => {
    todoForm(project);
  });

  const deleteProject = document.createElement("button");
  deleteProject.textContent = "Delete Project";
  deleteProject.classList.add("deleteProj");
  deleteProject.setAttribute("ProjectId", project.id);

  deleteProject.addEventListener("click", () => {
    handleDelete();
  });

  projectUI.appendChild(todosUI);
  projectUI.appendChild(addTodo);
  projectUI.appendChild(deleteProject);

  container.appendChild(projectUI);

  const handleDelete = () => {
    const { app } = require("../index.js");
    const { listProjects } = require("./sidabarUI.js");
    app.ProjectList = app.ProjectList.filter((item) => item.id != project.id);
    console.log(app.ProjectList);
    loadProject(app.ProjectList[0]);
    listProjects(app.ProjectList);
  };
}

export { loadProject };
