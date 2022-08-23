const adaptCharactersResponse = ({ count = 0, results = [] }) => {
  const newData = {
    itemsCount: count,
    data: results,
    totalPages: Math.ceil(count / 10),
  };

  newData.currentPage = newData.nextPage
    ? newData.nextPage - 1
    : newData.totalPages;

  return newData;
};

export { adaptCharactersResponse };
