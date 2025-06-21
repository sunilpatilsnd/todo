//function to generate increment id
const getNewId = () => {
  let currId = 0;
  return function () {
    currId++;
    return `task${currId}`;
  };
};

export { getNewId };
