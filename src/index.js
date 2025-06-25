const { createTodoItem } = require("./js/todo.js");
const { createProject } = require("./js/project.js");
const { loadProject } = require("./js/projectUI.js");
import "./styles.css";

let d = new Date("2025-12-31");

const todoItem = createTodoItem(
  "brush",
  "take time and clense your teeth",
  d,
  "high",
  ["brush", "toothpaste"],
  false
);

const todoItem2 = createTodoItem(
  "bath",
  "time to wash youeself",
  new Date("06/23/2024"),
  "high",
  ["towel", "soap"],
  false
);

const todoItem3 = createTodoItem(
  "breakfast",
  "have a helthy breakfast",
  new Date("8/23/2024"),
  "high",
  ["food", "coffee"],
  false
);

// todoItem.checklist[0].checked = true;
// let res = todoItem.markCompleated();
// console.log(todoItem.completed);
// // console.log(todoItem2);
// console.log(todoItem3);console.log(todoItem3);

const todoList = [todoItem, todoItem2, todoItem3];

const project = createProject("default", todoList);
const project2 = createProject("default2", todoList);

const projContainer = document.querySelector(".projects");

const projUI = loadProject(project2);

projContainer.appendChild(projUI);

console.log(projContainer);
console.log(project2);

// console.log(a);
