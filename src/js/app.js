const { createTodoItem, addTodoItem } = require("./todo.js");
const { createProject } = require("./project.js");
const { loadProject } = require("./projectUI.js");
const { listProjects } = require("./sidabarUI.js");

const App = () => {
  let ProjectList = [];
  //   console.log(ProjectList);

  const p1 = createProject("Hello Project");
  //   console.log(p1);
  const p2 = createProject("Sunil Project");

  const t1 = createTodoItem(
    "brush",
    "take time and clense your teeth",
    new Date(),
    "high",
    ["brush", "toothpaste"],
    false
  );

  const t2 = createTodoItem(
    "bath",
    "time to wash youeself",
    new Date("06/23/2024"),
    "high",
    ["towel", "soap"],
    false
  );
  //   console.log(t1);
  p1.addTodo(t1);
  p2.addTodo(t1);
  p2.addTodo(t2);

  p1.editTitle("This is new");

  ProjectList.push(p1, p2);
  //   ProjectList.push(p2);

  ProjectList;

  loadProject(p1);
  listProjects(ProjectList);

  return {
    ProjectList,
    addProject() {
      ProjectList.push(project);
    },
  };
};
export { App };

// let ProjectList = [];

// let d = new Date("2025-12-31");

// const todoItem = createTodoItem(
//   "brush",
//   "take time and clense your teeth",
//   d,
//   "high",
//   ["brush", "toothpaste"],
//   false
// );

// const todoItem2 = createTodoItem(
//   "bath",
//   "time to wash youeself",
//   new Date("06/23/2024"),
//   "high",
//   ["towel", "soap"],
//   false
// );

// const todoItem3 = createTodoItem(
//   "breakfast",
//   "have a helthy breakfast",
//   new Date("8/23/2024"),
//   "high",
//   ["food", "coffee"],
//   false
// );

// const todoItem4 = createTodoItem(
//   "work",
//   "work wherever you want",
//   new Date("8/31/2024"),
//   "high",
//   ["food", "coffee"],
//   false
// );
