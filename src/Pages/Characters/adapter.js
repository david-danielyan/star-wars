const adaptCharactersResponse = ({
  count = 0,
  results = [],
  next = null,
  previous = null,
}) => {
  const newData = {
    itemsCount: count,
    data: results,
    totalPages: Math.ceil(count / 10),
    nextPage: next,
    prevPage: previous,
  };

  if (next) {
    const splittedNext = next.split("page=");
    const nextPage = splittedNext[splittedNext.length - 1];
    newData.nextPage = nextPage;
  }

  if (previous) {
    const splittedPrev = previous.split("page=");
    const prevPage = splittedPrev[splittedPrev.length - 1];
    newData.prevPage = prevPage;
  }

  newData.currentPage = newData.nextPage
    ? newData.nextPage - 1
    : newData.totalPages;

  return newData;
};

export { adaptCharactersResponse };
