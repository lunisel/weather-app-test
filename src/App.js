import { useEffect } from "react";
import "./App.css";
import { fetchCity, fetchWeather, formatTime } from "./components/logic";

function App() {
  useEffect(() => {
    console.log("Use Effect");
    const fetch = async () => {
      const [lat, lon] = await fetchCity("Bologna");

      const weather = await fetchWeather(lat, lon);
      const time = formatTime(weather.current.dt);
      console.log(time);
    };

    fetch();
  }, []);
  return <div className="App"></div>;
}

export default App;
