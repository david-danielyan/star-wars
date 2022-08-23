const splitAndUppercase = (string) => {
  const splittedKey = string.split("_");
  const newString = splittedKey
    .map(
      (string) =>
        string.charAt(0).toLocaleUpperCase() + string.slice(1).toLowerCase()
    )
    .join(" ");

  return newString;
};

const adaptCharacterMainData = (data) => {
  const newData = [];

  const keysToSkip = {
    url: true,
    edited: true,
    created: true,
    homeworld: true,
  };
  const arrFromData = Object.entries(data);

  arrFromData.forEach(([key, value]) => {
    if (typeof value === "string" || typeof value == "number") {
      if (!keysToSkip[key]) {
        newData.push({
          key: splitAndUppercase(key),
          value,
        });
      }
    }
  });
  return newData;
};

const characterAdditionalInfoAdapter = {
  films: (data) => {
    const keysToSkip = {
      characters: true,
      edited: true,
      created: true,
      planets: true,
      species: true,
      url: true,
      vehicles: true,
      starships: true,
    };
    const newData = [];

    data.forEach((item, index) => {
      const arrFromItem = Object.entries(item.data);
      newData.push({});
      arrFromItem.forEach(([key, value]) => {
        if (!keysToSkip[key]) {
          newData[index][splitAndUppercase(key)] = value;
        }
      });
    });
    return { type: "films", data: newData };
  },
};
export { adaptCharacterMainData, characterAdditionalInfoAdapter };
