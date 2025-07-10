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
