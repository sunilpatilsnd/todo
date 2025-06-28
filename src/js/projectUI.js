const { getTodoUI } = require("./todoUI");

function loadProject(project) {
  const projectUI = document.createElement("div");
  const projectTitle = document.createElement("h2");

  projectTitle.textContent = project.title;
  projectUI.id = project.id;
  projectUI.classList.add("project");
  projectUI.appendChild(projectTitle);

  const todosUI = document.createElement("div");
  todosUI.classList.add("todos");

  // console.log(project.todos.length);

  if (project.todos) {
    project.todos.forEach((item) => {
      const todoItem = getTodoUI(item);
      todosUI.appendChild(todoItem);
    });
  } else {
    const todoItem = document.createElement("p");
    todoItem.textContent = "No Tasks added yet";
    todosUI.appendChild(todoItem);
  }

  projectUI.appendChild(todosUI);

  return projectUI;
}

export { loadProject };
