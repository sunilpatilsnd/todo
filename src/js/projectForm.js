const { createProject } = require("./project.js");

const addProjectUI = (projects) => {
  const dialog = document.querySelector("#projectForm");

  while (dialog.lastChild) {
    dialog.removeChild(dialog.lastChild);
  }

  const form = document.createElement("form");
  form.classList.add("projectForm");
  form.setAttribute("action", "/");
  form.setAttribute("method", "post");

  const header = document.createElement("h2");
  header.textContent = "Add new project";

  form.appendChild(header);

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("required", true);
  title.setAttribute("name", "title");

  const titleContainer = document.createElement("label");
  const lbltxt = document.createElement("span");
  lbltxt.classList.add("label");
  lbltxt.textContent = "Title: ";

  titleContainer.appendChild(lbltxt);
  titleContainer.appendChild(title);

  form.appendChild(titleContainer);

  const submit = document.createElement("button");
  submit.textContent = "Create";
  submit.setAttribute("type", "submit");

  form.appendChild(submit);

  dialog.appendChild(form);

  dialog.showModal();

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("closeBtn");
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  dialog.appendChild(closeBtn);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = createProject(title.value);

    projects.push(project); // adding project to the project list
    const { listProjects } = require("./sidabarUI.js"); // importing only on submit to avoid circular dependancy
    const { loadProject } = require("./projectUI.js");
    listProjects(projects);
    loadProject(project);
    dialog.close();
  });
};

export { addProjectUI };
