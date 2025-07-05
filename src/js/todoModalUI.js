const { format } = require("date-fns");

const showTodoModal = (todo) => {
  const todoModal = document.createElement("dialog");
  todoModal.id = todo.id + "_modal"; // setting modal id using todo ID

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("closeBtn");
  todoModal.appendChild(closeBtn);

  const title = document.createElement("h1");
  title.textContent = todo.title;
  todoModal.appendChild(title);

  const description = document.createElement("p");
  description.textContent = todo.description;
  todoModal.appendChild(description);

  const dueDate = document.createElement("p");
  dueDate.textContent = format(todo.dueDate, "do MMM yyyy");
  todoModal.appendChild(dueDate);

  const priority = document.createElement("p");
  priority.textContent = todo.priority;
  todoModal.appendChild(priority);

  const container = document.querySelector(".todoModal");
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
  container.appendChild(todoModal);

  todoModal.showModal();
  closeBtn.addEventListener("click", () => todoModal.close());
};

export { showTodoModal };

// need to open a modal and show the content of the todo with proper tags
