import { useSelector } from "react-redux";
import { formatDate } from "./logic";

const CurrentSelectedDesktop = () => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  const date = formatDate(selectedCity.w.current.dt);
  const temperature = selectedCity.w.current.temp.toString().split(".");
  return (
    <>
      <div className="img-current-container">
        <img src="/assets/currentDesktop.jpeg" alt="cover" />
        <div className="current-text-container">
          <h2>{selectedCity.name}</h2>
          <p>{date}</p>
          <span>{selectedCity.w.current.weather[0].description}</span>
        </div>
      </div>
      <div
        className={`current-weather-side bg-${selectedCity.w.current.weather[0].icon}`}
      >
        <span>{temperature[0]}˚</span>
        <img
          src={`/assets/${selectedCity.w.current.weather[0].icon}.png`}
          alt="weather-icon"
        />
      </div>
    </>
  );
};

export default CurrentSelectedDesktop;
