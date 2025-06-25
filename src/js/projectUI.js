const { format } = require("date-fns");

function loadProject(project) {
  const projectUI = document.createElement("div");
  const projectTitle = document.createElement("h2");

  projectTitle.textContent = project.title;
  projectUI.id = project.id;
  projectUI.classList.add("project");
  projectUI.appendChild(projectTitle);

  const todosUI = document.createElement("div");
  todosUI.classList.add("todos");

  project.todos.forEach((item) => {
    const todoUI = document.createElement("div");
    todoUI.id = item.id;
    todoUI.classList.add("todo");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const dueDate = document.createElement("p");
    dueDate.textContent = format(item.dueDate, "do MMM yyyy");

    todoUI.appendChild(title);
    todoUI.appendChild(description);
    todoUI.appendChild(dueDate);

    todosUI.appendChild(todoUI);
  });

  projectUI.appendChild(todosUI);

  return projectUI;
}

export { loadProject };
