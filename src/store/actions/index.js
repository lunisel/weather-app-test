export const addUserName = (userName) => ({
  type: "ADD_USER_NAME",
  payload: userName,
});

export const addCity = (cityName) => ({
  type: "ADD_CITY",
  payload: cityName,
});

export const addSelectedCity = (city) => ({
  type: "ADD_SELECTED_CITY",
  payload: city,
});

export const removeCity = (index) => ({
  type: "REMOVE_CITY",
  payload: index,
});
