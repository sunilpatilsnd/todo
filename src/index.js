const { App } = require("./js/app.js");
const { createTodoItem, addTodoItem } = require("./js/todo.js");
const { createProject } = require("./js/project.js");
const { loadProject } = require("./js/projectUI.js");
const { listProjects } = require("./js/sidabarUI.js");

import "./styles.css";

let app = App();

const p1 = createProject("Default");
//   console.log(p1);
const p2 = createProject("User Created Project");

const t1 = createTodoItem(
  "brush",
  "take time and clense your teeth",
  new Date(),
  "high",
  true
);

const t2 = createTodoItem(
  "bath",
  "time to wash youeself",
  new Date("06/23/2024"),
  "high",
  false
);
//   console.log(t1);
p1.addTodo(t1);
p2.addTodo(t1);
p2.addTodo(t2);

app.ProjectList.push(p1, p2);
//   ProjectList.push(p2);

loadProject(app.ProjectList[0]);
listProjects(app.ProjectList);

export { app };
