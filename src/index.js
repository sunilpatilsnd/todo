const { App } = require("./js/app.js");
const { createTodoItem, addTodoItem } = require("./js/todo.js");
const { createProject } = require("./js/project.js");
const { loadProject } = require("./UI/projectUI.js");
const { listProjects } = require("./UI/sidabarUI.js");

import "./styles.css";

let app = App();

const p1 = createProject("Default");
//   console.log(p1);
const p2 = createProject("User Created Project");

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
//   console.log(t1);
p1.addTodo(t1);
p1.addTodo(t3);
p2.addTodo(t1);
p2.addTodo(t2);

t1.editTodo("new title");

app.ProjectList.push(p1, p2);
//   ProjectList.push(p2);

loadProject(app.ProjectList[0]);
listProjects(app.ProjectList);

export { app };
