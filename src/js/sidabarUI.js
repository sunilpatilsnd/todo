const { loadProject } = require("./projectUI.js");

const listProjects = (projects) => {
  const container = document.querySelector("aside");

  //empty the sidebar
  emptyContainer(container);

  const header = document.createElement("h2");
  header.textContent = "Projects";
  container.appendChild(header);
  // const projectsArr = Object.entries(projects);

  const projectsList = document.createElement("ul");

  projects.forEach((project) => {
    const item = document.createElement("li");
    item.textContent = project.title;
    item.id = project.id + "_sidebar";
    projectsList.appendChild(item);

    item.addEventListener(
      "click",
      () => {
        loadProject(project);
      },
      true
    );
  });

  container.appendChild(projectsList);
};
const emptyContainer = (item) => {
  while (item.lastChild) {
    item.removeChild(item.lastChild);
  }
};
export { listProjects };
