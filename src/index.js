const { App } = require("./js/app.js");
const { createTodoItem } = require("./js/todo.js");
const { createProject } = require("./js/project.js");
const { loadProject } = require("./UI/projectUI.js");
const { listProjects } = require("./UI/sidabarUI.js");
const { loadFromLocalStorage } = require("./js/handleStorage.js");

import "./styles.css";

function startApp() {
  const defaultProject = () => {
    const p1 = createProject("Default");

    const t1 = createTodoItem(
      "Read Documentation",
      "take time go through all documentation",
      new Date(),
      "low",
      true
    );

    const t2 = createTodoItem(
      "Work on App",
      "Spend two hours on building the app",
      new Date("06/23/2024"),
      "high",
      true
    );

    const t3 = createTodoItem(
      "Deploy Changes",
      "deploy to github pages",
      new Date(),
      "medium",
      true
    );

    p1.addTodo(t1);
    p1.addTodo(t2);
    p1.addTodo(t3);

    App.addProject(p1);
  };

  loadFromLocalStorage();

  loadProject(App.projectList[0]);
  listProjects(App.projectList);
}

startApp();

export { startApp };
