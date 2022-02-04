import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Desktop from "./components/Desktop";
import { fetchCity, fetchWeather, formatTime } from "./components/logic";
import Mobile from "./components/Mobile";

function App() {
  const [vw, setVw] = useState(0);

  useEffect(() => {
    const handleScreenSize = () => {
      setVw(window.innerWidth);
    };
    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [vw]);

  useEffect(() => {
    console.log("Use Effect");
    const fetch = async () => {
      const [lat, lon] = await fetchCity("Bologna");

      const weather = await fetchWeather(lat, lon);
      const time = formatTime(weather.current.dt);
      console.log(weather);
    };

    fetch();
  }, []);
  return <div className="App">{vw > 1000 ? <Desktop /> : <Mobile />}</div>;
}

export default App;
