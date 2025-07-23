import { App } from "./app.js";
import { createTodoItem } from "./todo.js";
const { createProject } = require("./project.js");

const load_init_data = () => {
  let init_data = [
    {
      id: "project1",
      title: "Default",
      todos: [
        {
          id: "todo1",
          title: "Read Documentation",
          description: "take time go through all documentation",
          dueDate: "2025-07-22T16:21:51.960Z",
          priority: "low",
          completed: false,
        },
        {
          id: "todo2",
          title: "Work on App",
          description: "Spend two hours on building the app",
          dueDate: "2024-06-22T18:30:00.000Z",
          priority: "high",
          completed: false,
        },
        {
          id: "todo3",
          title: "Deploy Changes",
          description: "deploy to github pages",
          dueDate: "2025-07-22T16:21:51.960Z",
          priority: "medium",
          completed: false,
        },
      ],
    },
  ];

  localStorage.setItem("projectList", JSON.stringify(init_data)); //adds starter data to local storage
};

function loadFromLocalStorage() {
  //creates a default js object on stores it in localStorage
  // retrieves from loacal storage and pushes the data to App.projectList
  if (!localStorage.projectList) {
    load_init_data();
  }

  let projects = JSON.parse(localStorage.getItem("projectList")); // creating js object

  // console.log(projects);
  projects.forEach((project) => {
    attachProjects(project);
  });
}

const saveToLocalstorage = () => {
  // takes the data from App.project list converts them to sting and stores in localstorage
  const data = App.projectList;
  localStorage.setItem("projectList", JSON.stringify(data));

  console.log(App.projectList);
  console.log(localStorage.getItem("projectList"));
};

const attachProjects = (obj) => {
  // takes plain js project object and converts that to app specific object with methods attached
  const newProj = createProject(obj.title);

  obj.todos.forEach((todo) => {
    const newTodo = attachTodos(todo);
    newProj.addTodo(newTodo);
  });

  App.addProject(newProj);
};

const attachTodos = (todo) => {
  //takes plain js Todo objects and converts them to app specific todo objects with methods attached
  const newTodo = createTodoItem(
    todo.title,
    todo.description,
    new Date(todo.dueDate),
    todo.priority,
    todo.completed
  );
  return newTodo;
};

export { loadFromLocalStorage, saveToLocalstorage };
