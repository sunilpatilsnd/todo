const { loadProject } = require("./projectUI.js");

const { format } = require("date-fns");
const { showTodoModal } = require("./todoModalUI.js");
const { createTodoItem } = require("./todo.js");

const getTodoUI = (todo) => {
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
      showTodoModal(todo);
    },
    true
  );
  return todoUI;
};

const todoForm = (project) => {
  const formContainer = document.querySelector("#todoForm");

  while (formContainer.lastChild) {
    formContainer.removeChild(formContainer.lastChild);
  }

  const form = document.createElement("form");

  form.setAttribute("action", "none");
  form.setAttribute("method", "post");

  const formTitle = document.createElement("h2");
  formTitle.textContent = `Project: ${project.title}`;
  formTitle.classList.add("header");

  form.appendChild(formTitle);

  const title = document.createElement("input");
  const titleContainer = document.createElement("label");

  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("required", true);

  titleContainer.textContent = "Title: ";
  titleContainer.appendChild(title);

  form.appendChild(titleContainer);

  const description = document.createElement("textarea");
  const descriptionContainer = document.createElement("label");

  description.setAttribute("name", "description");
  description.setAttribute("placeholder", "Enter Task description");

  descriptionContainer.textContent = "Description: ";
  descriptionContainer.appendChild(description);

  form.appendChild(descriptionContainer);

  const dueDateContainer = document.createElement("label");
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("value", format(new Date(), "yyyy-MM-dd"));
  dueDate.setAttribute("min", format(new Date(), "yyyy-MM-dd"));

  dueDateContainer.textContent = "Due Date: ";
  dueDateContainer.appendChild(dueDate);

  form.appendChild(dueDateContainer);

  const options = ["high", "medium", "low"];

  const priorityContainer = document.createElement("label");
  const priority = document.createElement("select");

  priorityContainer.textContent = "Priority";
  priority.setAttribute("name", "priority");

  options.forEach((option) => {
    const item = document.createElement("option");
    item.setAttribute("value", option);
    item.textContent = option;

    priority.appendChild(item);
  });

  priorityContainer.appendChild(priority);

  form.appendChild(priorityContainer);

  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");

  legend.textContent = "Is this task completed?";

  fieldset.appendChild(legend);

  const completedContainer = document.createElement("label");
  const completed = document.createElement("input");

  completedContainer.textContent = "Yes: ";
  completed.setAttribute("type", "radio");
  completed.setAttribute("name", "completed");
  completed.setAttribute("value", true);

  completedContainer.appendChild(completed);
  fieldset.appendChild(completedContainer);

  const notCompletedContainer = document.createElement("label");
  const notCompleted = document.createElement("input");

  notCompletedContainer.textContent = "No: ";
  notCompleted.setAttribute("type", "radio");
  notCompleted.setAttribute("name", "completed");
  notCompleted.setAttribute("value", false);

  notCompletedContainer.appendChild(notCompleted);

  fieldset.appendChild(notCompletedContainer);

  form.appendChild(fieldset);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add";
  submitBtn.setAttribute("type", "submit");

  // submitBtn.addEventListener("click", (event) => {
  //   event.preventDefault();
  // });

  form.appendChild(submitBtn);

  // Keep adding fields here ^^
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
      completed.value
    );

    project.addTodo(todo);

    loadProject(project);

    formContainer.close();
  });
};

export { getTodoUI, todoForm };
