const { getNewId } = require("./idGenerator.js");

const idGenerator = getNewId("project");

const createProject = (title) => {
  return {
    id: idGenerator(),
    title: title,
    todos: [],
    addTodo(todo) {
      this.todos.push(todo);
    },
    editTitle(newTitle) {
      this.title = newTitle;
    },
    deleteTodo(todo) {
      let newTodos = this.todos.filter((item) => item.id != todo.id);
      this.todos = newTodos;
      console.log(newTodos);
    },
  };
};

export { createProject };
