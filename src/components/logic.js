export const fetchCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=25c86cf9b9d81c98fb63caa0831488e2`
    );
    if (response.ok) {
      const city = await response.json();
      if (city) {
        const lat = city[0].lat;
        const lon = city[0].lon;
        return [lat, lon];
      }
    } else {
      console.log("Something went wrong with the fetch", response);
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=25c86cf9b9d81c98fb63caa0831488e2`
    );
    if (response.ok) {
      const weather = await response.json();
      return weather;
    } else console.log("something went wrong with the fetch", response);
  } catch (err) {
    console.log(err);
  }
};
