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
        const name = city[0].name;
        return [lat, lon, name];
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
    } else {
      console.log("something went wrong with the fetch", response);
    }
  } catch (err) {
    console.log(err);
  }
};

export const formatDate = (dt) => {
  const unixTimestamp = dt;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const weekDay = dateObject.toLocaleString("en-US", { weekday: "long" });
  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const day = dateObject.toLocaleString("en-US", { day: "numeric" });

  const time = weekDay + " " + day + ", " + month;

  return time;
};

export const formatTime = (dt, timezone) => {
  const unixTimestamp = dt;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const h = dateObject.toLocaleString("en-US", {
    hour: "numeric",
    timeZone: timezone,
  });
  const [hour, AmPm] = h.split(" ");
  const minutes = dateObject.toLocaleString("en-US", {
    minute: "numeric",
    timeZone: timezone,
  });

  const time =
    (hour.length === 2 ? hour : "0" + hour) +
    ":" +
    (minutes.length === 2 ? minutes : "0" + minutes) +
    " " +
    AmPm;

  return time;
};
