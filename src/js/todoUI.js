const { format } = require("date-fns");
const { showTodoModal } = require("./todoModalUI.js");

const getTodoUI = (todo, project) => {
  const todoUI = document.createElement("div");
  todoUI.id = todo.id;
  todoUI.classList.add("todo");

  const title = document.createElement("h3");
  title.textContent = todo.title;

  const description = document.createElement("p");
  description.textContent = todo.description;

  const dueDate = document.createElement("p");
  dueDate.textContent = format(todo.dueDate, "do MMM yyyy");

  todoUI.appendChild(title);
  todoUI.appendChild(description);
  todoUI.appendChild(dueDate);

  todoUI.addEventListener(
    "click",
    (event) => {
      event.preventDefault;
      showTodoModal(todo, project);
    },
    true
  );
  return todoUI;
};

export { getTodoUI };
