const { createTodoItem } = require("../js/todo.js");
const { format } = require("date-fns");
const { loadProject } = require("./projectUI.js");

const todoForm = (project) => {
  const formContainer = document.querySelector("#todoForm");

  while (formContainer.lastChild) {
    formContainer.removeChild(formContainer.lastChild);
  }

  const form = document.createElement("form");

  form.setAttribute("action", "none");
  form.setAttribute("method", "post");

  const formTitle = document.createElement("h2");
  formTitle.textContent = `Add todo`;
  formTitle.classList.add("header");

  form.appendChild(formTitle);

  const title = document.createElement("input");
  const titleContainer = document.createElement("label");

  const titleText = document.createElement("span");
  titleText.classList.add("label");
  titleText.textContent = "Title: ";

  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("required", true);

  titleContainer.appendChild(titleText);
  titleContainer.appendChild(title);

  form.appendChild(titleContainer);

  const description = document.createElement("textarea");
  const descriptionContainer = document.createElement("label");
  const descriptionText = document.createElement("spam");

  descriptionText.textContent = "Description: ";
  descriptionText.classList.add("label");

  description.setAttribute("name", "description");
  description.setAttribute("placeholder", "Enter Task description");

  descriptionContainer.appendChild(descriptionText);
  descriptionContainer.appendChild(description);

  form.appendChild(descriptionContainer);

  const dueDateContainer = document.createElement("label");
  const dueDate = document.createElement("input");
  const dueDateText = document.createElement("span");

  dueDateText.textContent = "Due Date: ";
  dueDateText.classList.add("label");

  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("value", format(new Date(), "yyyy-MM-dd"));
  dueDate.setAttribute("min", format(new Date(), "yyyy-MM-dd"));

  dueDateContainer.appendChild(dueDateText);
  dueDateContainer.appendChild(dueDate);

  form.appendChild(dueDateContainer);

  const options = ["high", "medium", "low"];

  const priorityContainer = document.createElement("label");
  const priority = document.createElement("select");
  const priorityText = document.createElement("span");

  priorityText.textContent = "Priority";
  priorityText.classList.add("label");

  priority.setAttribute("name", "priority");

  options.forEach((option) => {
    const item = document.createElement("option");
    item.setAttribute("value", option);
    item.textContent = option;

    priority.appendChild(item);
  });

  priorityContainer.appendChild(priorityText);
  priorityContainer.appendChild(priority);

  form.appendChild(priorityContainer);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add To Do";
  submitBtn.setAttribute("type", "submit");

  form.appendChild(submitBtn);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("closeBtn");
  closeBtn.textContent = "X";

  closeBtn.addEventListener("click", () => {
    formContainer.close();
  });

  formContainer.appendChild(form);
  formContainer.appendChild(closeBtn);

  formContainer.showModal();

  //handelling form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = createTodoItem(
      title.value,
      description.value,
      new Date(dueDate.value || new Date()),
      priority.value,
      false
    );

    project.addTodo(todo);

    loadProject(project);

    formContainer.close();
  });
};

export { todoForm };
