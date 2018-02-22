export const callFetch = async url => {
  try {
    const getData = await fetch(url);

    if (getData.status <= 200) {
      return await getData.json();
    } else {
      throw new Error('status code > 200');
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const getHouses = async () => {
  const fetchHouseData = await callFetch('http://localhost:3001/api/v1/houses');

  const houseMap = await fetchHouseData.map(async house => {
    return {
      name: house.name,
      coatOfArms: house.coatOfArms,
      words: house.words,
      titles: house.titles,
      seats: house.seats,
      founded: house.founded,
      ancestralWeapons: house.ancestralWeapons
    };
  });

  return Promise.all(houseMap);
};
