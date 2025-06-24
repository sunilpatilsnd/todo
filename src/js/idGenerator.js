//function to generate increment id
const getNewId = (type) => {
  let currId = 0;
  return function () {
    currId++;
    return `${type}${currId}`;
  };
};

export { getNewId };
