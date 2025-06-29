const { createTodoItem, addTodoItem } = require("./todo.js");
const { createProject } = require("./project.js");
const { loadProject } = require("./projectUI.js");
const { listProjects } = require("./sidabarUI.js");

const runApp = () => {
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
};
export { runApp };

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

// // todoItem.checklist[0].checked = true;
// // let res = todoItem.markCompleated();
// // console.log(todoItem.completed);
// // // console.log(todoItem2);
// // console.log(todoItem3);console.log(todoItem3);

// const todoList = [todoItem, todoItem2, todoItem3];

// const project = createProject("default project");
// const project2 = createProject("default2", todoList);
// const project3 = createProject("Project Name", todoList);

// addTodoItem(project3, todoItem4);

// addProject(ProjectList, project3);
// const projContainer = document.querySelector(".projects");

// const projUI = loadProject(project);

// projContainer.appendChild(projUI);

// listProjects(ProjectList);

// console.log(projContainer);
// console.log(project2);

// console.log(a);
