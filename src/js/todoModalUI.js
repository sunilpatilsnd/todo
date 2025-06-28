const showTodoModal = (todo) => {
  const todoModal = document.createElement("div");
  todoModal.id = todo.id + "_modal"; // setting modal id using todo ID
  console.log(todoModal);
};

export { showTodoModal };

// need to open a modal and show the content of the todo with proper tags
