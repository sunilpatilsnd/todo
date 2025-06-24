const { getNewId } = require("./idGenerator.js");

const idGenerator = getNewId("todo"); //closure to retain last id value

const createTodoItem = (
  title,
  description,
  dueDate,
  priority,
  checklist,
  completed
) => {
  return {
    id: idGenerator(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    checklist: checklist.map((item) => {
      return { item: item, checked: false };
    }), //creating checklist object for list of checklist items with checked flag
    completed: false,
    markCompleated() {
      return (this.completed = true);
    },
  };
};

export { createTodoItem };
