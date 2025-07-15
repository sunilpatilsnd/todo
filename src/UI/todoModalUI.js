const { format } = require("date-fns");
const {} = require("../js/project.js");

const showTodoModal = (todo, project) => {
  const todoModal = document.createElement("dialog");
  todoModal.id = todo.id + "_modal"; // setting modal id using todo ID
  todoModal.classList.add("todoModal");

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("closeBtn");
  todoModal.appendChild(closeBtn);

  const title = document.createElement("h1");
  title.textContent = todo.title;
  todoModal.appendChild(title);

  const description = document.createElement("p");
  description.textContent = todo.description;
  description.classList.add("description");
  todoModal.appendChild(description);

  const dueDate = document.createElement("p");
  dueDate.textContent = `Due on : ${format(todo.dueDate, "do MMM yyyy")}`;
  dueDate.classList.add("dueDate");
  todoModal.appendChild(dueDate);

  const priority = document.createElement("p");
  priority.textContent = `Priority :`;

  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = `${todo.priority}`;
  prioritySpan.classList.add("priority");

  priority.appendChild(prioritySpan);

  switch (todo.priority) {
    case "high":
      prioritySpan.classList.add("bg-red");
      break;
    case "medium":
      prioritySpan.classList.add("bg-orange");
      break;
    case "low":
      prioritySpan.classList.add("bg-yellow");
      break;
    default:
      prioritySpan.classList.add("priority");
  }

  todoModal.appendChild(priority);

  const completed = document.createElement("p");
  completed.classList.add("status");
  completed.textContent = `Status : ${
    todo.completed ? "completed" : "not completed"
  }`;
  todoModal.appendChild(completed);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.setAttribute("todoID", todo.id);

  todoModal.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    project.deleteTodo(todo);
    const { loadProject } = require("./projectUI.js");
    loadProject(project);
    todoModal.close();
  });

  const completeBtn = document.createElement("button");
  completeBtn.textContent = !todo.completed ? "Completed" : "Not Completed";
  completeBtn.setAttribute("todoID", todo.id);

  todoModal.appendChild(completeBtn);

  completeBtn.addEventListener("click", () => {
    todo.toggleCompleated();
    const { loadProject } = require("./projectUI.js");
    loadProject(project);
    todoModal.close();
  });

  const container = document.querySelector(".todoModal");
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }

  if (todo.completed) {
    todoModal.classList.add("strike");
  }

  container.appendChild(todoModal);

  todoModal.showModal();
  closeBtn.addEventListener("click", () => todoModal.close());
};

export { showTodoModal };

// need to open a modal and show the content of the todo with proper tags
