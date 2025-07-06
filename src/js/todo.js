const { getNewId } = require("./idGenerator.js");

const idGenerator = getNewId("todo"); //closure to retain last id value

const createTodoItem = (title, description, dueDate, priority, completed) => {
  return {
    id: idGenerator(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: completed ? completed : false,
    markCompleated() {
      this.completed = true;
    },
  };
};

export { createTodoItem };
