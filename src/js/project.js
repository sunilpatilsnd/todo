const { getNewId } = require("./idGenerator.js");

const idGenerator = getNewId("project");

const createProject = (title, todos) => {
  return {
    id: idGenerator(),
    title: title,
    todos: todos,
  };
};

const addProject = (projects, project) => {
  return { ...projects, project };
};
export { createProject, addProject };
