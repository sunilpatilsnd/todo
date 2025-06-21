const { createToDoItem } = require("./todo.js");
import "./styles.css";
const { isDate } = require("date-fns");

let d = new Date("2025-12-31");

console.log(isDate(d));

const todoItem = createToDoItem(
  "test",
  "test desc",
  d,
  "high",
  ["test1", "test2"],
  false
);

const todoItem2 = createToDoItem(
  "test2",
  "test desc",
  d,
  "high",
  ["test1", "test2"],
  false
);
todoItem.checklist[0].checked = true;

console.log(todoItem);

console.log(todoItem2);

const JSONString = JSON.stringify(todoItem);

console.log(JSONString);

const jsObject = JSON.parse(JSONString);
console.log(jsObject);
