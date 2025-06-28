const { loadProject } = require("./projectUI.js");

const listProjects = (projects) => {
  const container = document.querySelector("aside");

  //empty the sidebar
  emptyContainer(container);

  const header = document.createElement("h2");
  header.textContent = "Projects";
  container.appendChild(header);
  const projectsArr = Object.entries(projects);

  const projectsList = document.createElement("ul");

  projectsArr.forEach((project) => {
    const item = document.createElement("li");
    item.textContent = project[1].title;
    item.id = project[1].id + "_sidebar";
    projectsList.appendChild(item);

    item.addEventListener(
      "click",
      () => {
        loadSelectedProject(project[1]);
      },
      true
    );
  });

  container.appendChild(projectsList);
};

const loadSelectedProject = (project) => {
  const projContainer = document.querySelector(".projects");

  emptyContainer(projContainer);

  const projUI = loadProject(project);

  projContainer.appendChild(projUI);
};

const emptyContainer = (item) => {
  while (item.lastChild) {
    item.removeChild(item.lastChild);
  }
};
export { listProjects };
