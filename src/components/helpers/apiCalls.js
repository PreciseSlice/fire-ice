export const callFetch = async url => {
  try {
    const getData = await fetch(url);
  
    if(getData.status <= 200) {
      return await getData.json()
    } else {
      throw new Error ('status code > 200')
    }
  } catch (error) {
    throw new Error (error)
  }
}

export const getHouses = async url => {
  const fetchHouseData = await callFetch('http://localhost:3001/api/v1/houses');
  
  return Promise.all(fetchHouseData);
}




