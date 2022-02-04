import { useEffect } from "react";
import "./App.css";
import { fetchCity, fetchWeather } from "./components/logic";

function App() {
  useEffect(() => {
    console.log("Use Effect");
    const fetch = async () => {
      const [lat, lon] = await fetchCity("Bologna");

      const weather = await fetchWeather(lat, lon);
      console.log(weather);
    };

    fetch();
  }, []);
  return <div className="App"></div>;
}

export default App;
