const { getNewId } = require("./idGenerator.js");

const idGenerator = getNewId("todo"); //closure to retain last id value

const createTodoItem = (title, description, dueDate, priority, completed) => {
  return {
    id: idGenerator(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    completed: false,
    toggleCompleated() {
      this.completed = !this.completed;
    },
    editTodo(title, descr, dueDate, priority) {
      this.title = title || this.title;
      this.description = descr || this.description;
      this.dueDate = dueDate || this.dueDate;
      this.priority = priority || this.priority;
      this.completed = false;
    },
  };
};

export { createTodoItem };
