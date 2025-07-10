const { format } = require("date-fns");
const { showTodoModal } = require("./todoModalUI.js");

const getTodoUI = (todo, project) => {
  const todoUI = document.createElement("div");
  todoUI.id = todo.id;
  todoUI.classList.add("todo");

  const title = document.createElement("h3");
  title.textContent = todo.title;

  const dueDate = document.createElement("p");
  dueDate.textContent = `Due on :${format(todo.dueDate, "do MMM yyyy")}`;

  const priority = document.createElement("span");
  priority.classList.add("priority");

  priority.textContent = todo.priority;

  switch (todo.priority) {
    case "high":
      priority.classList.add("bg-red");
      break;
    case "medium":
      priority.classList.add("bg-orange");
      break;
    case "low":
      priority.classList.add("bg-yellow");
      break;
    default:
      priority.classList.add("priority");
  }

  if (todo.completed) {
    todoUI.classList.add("strike");
  }

  todoUI.appendChild(title);
  todoUI.appendChild(dueDate);
  todoUI.appendChild(priority);

  todoUI.addEventListener(
    "click",
    (event) => {
      event.preventDefault;
      showTodoModal(todo, project);
    },
    true
  );

  if (todo.status) {
    todoUI.classList.add("strike");
  }

  return todoUI;
};

export { getTodoUI };
