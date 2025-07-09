const App = () => {
  return {
    ProjectList: [],
    addProject() {
      this.ProjectList.push(project);
    },
    deleteProject(delId) {
      this.ProjectList = ProjectList.filter((project) => project.id != delId);
      console.log(ProjectList);
    },
  };
};

export { App };

// let ProjectList = [];

// let d = new Date("2025-12-31");

// const todoItem = createTodoItem(
//   "brush",
//   "take time and clense your teeth",
//   d,
//   "high",
//   ["brush", "toothpaste"],
//   false
// );

// const todoItem2 = createTodoItem(
//   "bath",
//   "time to wash youeself",
//   new Date("06/23/2024"),
//   "high",
//   ["towel", "soap"],
//   false
// );

// const todoItem3 = createTodoItem(
//   "breakfast",
//   "have a helthy breakfast",
//   new Date("8/23/2024"),
//   "high",
//   ["food", "coffee"],
//   false
// );

// const todoItem4 = createTodoItem(
//   "work",
//   "work wherever you want",
//   new Date("8/31/2024"),
//   "high",
//   ["food", "coffee"],
//   false
// );
