import { App } from "../js/app.js";
const { saveToLocalstorage } = require("../js/handleStorage.js");

const { getTodoUI } = require("./todoUI.js");
const { todoForm } = require("./todoForm.js");

function loadProject(project) {
  const container = document.querySelector(".projects");

  while (container.lastChild) {
    container.removeChild(container.lastChild);
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

  if (project.todos.length == 0) {
    const messege = document.createElement("p");
    messege.textContent = "No Todo Items to show";
    todosUI.appendChild(messege);
  }

  project.todos.forEach((item) => {
    const todoItem = getTodoUI(item, project);
    todosUI.appendChild(todoItem);
  });

  const addTodo = document.createElement("button");
  addTodo.textContent = "Add To Do";
  addTodo.setAttribute("ProjectId", project.id);

  addTodo.addEventListener("click", () => {
    todoForm(project);
  });

  projectUI.appendChild(todosUI);
  projectUI.appendChild(addTodo);

  if (project.id != "project1") {
    const deleteProject = document.createElement("button");
    deleteProject.textContent = "Delete Project";
    deleteProject.classList.add("delete");
    deleteProject.setAttribute("ProjectId", project.id);

    deleteProject.addEventListener("click", () => {
      handleDelete();
    });
    projectUI.appendChild(deleteProject);
  }

  container.appendChild(projectUI);

  const handleDelete = () => {
    const { listProjects } = require("./sidabarUI.js");
    App.projectList = App.projectList.filter((item) => item.id != project.id);
    loadProject(App.projectList[0]);
    console.log(App.projectList);
    listProjects(App.projectList);
    saveToLocalstorage();
  };
}

export { loadProject };
