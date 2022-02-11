import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCity, addSelectedCity } from "../store/actions";
import { fetchWeather, formatDate } from "./logic";

const CurrentSelectedDesktop = () => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  const dispatch = useDispatch();

  const setSelectedDefault = async () => {
    let lat = 45.0678;
    let lon = 7.6825;
    let w = await fetchWeather(lat, lon);
    dispatch(addSelectedCity({ w: w, name: "Turin", index: 0 }));
    dispatch(addCity({ w: w, name: "Turin" }));
  };
  useEffect(() => {
    if (selectedCity) {
      return;
    } else {
      setSelectedDefault();
    }
  }, []);
  return (
    <>
      <div className="img-current-container">
        <img src="/assets/currentDesktop.jpeg" alt="cover" />
        {selectedCity && (
          <div className="current-text-container">
            <h2>{selectedCity.name}</h2>
            <p>{formatDate(selectedCity.w.current.dt)}</p>
            <span>{selectedCity.w.current.weather[0].description}</span>
          </div>
        )}
      </div>
      {selectedCity && (
        <div
          className={`current-weather-side bg-${selectedCity.w.current.weather[0].icon}`}
        >
          <span>{selectedCity.w.current.temp.toString().split(".")[0]}˚</span>
          <img
            src={`/assets/${selectedCity.w.current.weather[0].icon}.png`}
            alt="weather-icon"
          />
        </div>
      )}
    </>
  );
};

export default CurrentSelectedDesktop;
