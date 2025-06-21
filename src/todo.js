const { getNewId } = require("./idGenerator.js");

const createToDoItem = (
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
  };
};

const idGenerator = getNewId(); //closure to retain last id value

export { createToDoItem };
