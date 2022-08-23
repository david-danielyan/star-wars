const adaptCharactersResponse = ({ count = 0, results = [] }) => {
  const newData = {
    itemsCount: count,
    data: results,
    totalPages: Math.ceil(count / 10),
  };

  return newData;
};

export { adaptCharactersResponse };
