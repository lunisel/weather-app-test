import { useEffect } from "react";
import "./App.css";
import { fetchCity, fetchWeather } from "./components/logic";

function App() {
  useEffect(() => {
    console.log("Use Effect");
    const fetch = async () => {
      const [lat, lon] = await fetchCity("Bologna");

      const weather = await fetchWeather(lat, lon);
      const unixTimestamp = weather.current.dt;

      const milliseconds = unixTimestamp * 1000; // 1575909015000

      const dateObject = new Date(milliseconds);

      const weekDay = dateObject.toLocaleString("en-US", { weekday: "long" });
      const month = dateObject.toLocaleString("en-US", { month: "long" });
      const day = dateObject.toLocaleString("en-US", { day: "numeric" });
      const h = dateObject.toLocaleString("en-US", { hour: "numeric" });
      const [hour, AmPm] = h.split(" ");
      const minutes = dateObject.toLocaleString("en-US", { minute: "numeric" });

      console.log(
        weekDay,
        day,
        ",",
        month,
        ",",
        hour.length === 2 ? hour : "0" + hour,
        ":",
        minutes.length === 2 ? minutes : "0" + minutes,
        AmPm
      );
    };

    fetch();
  }, []);
  return <div className="App"></div>;
}

export default App;
