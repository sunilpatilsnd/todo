const createApp = () => {
  return {
    projectList: [],
    addProject(project) {
      this.projectList.push(project);
    },
    deleteProject(delId) {
      this.ProjectList = ProjectList.filter((project) => project.id != delId);
      console.log(ProjectList);
    },
  };
};

const App = createApp();

// console.log(App);

export { App };
