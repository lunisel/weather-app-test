import { useDispatch } from "react-redux";
import { addSelectedCity } from "../store/actions";
import { formatDate, formatTime } from "./logic";

const SingleCityCard = ({ weather, name, setPage, index }) => {
  const currentWeather = weather.current;
  const date = formatDate(currentWeather.dt);
  const time = formatTime(currentWeather.dt, weather.timezone);
  const temp = currentWeather.temp;
  const temperature = temp.toString().split(".");

  const dispatch = useDispatch();

  return (
    <div
      className={`card-container bg-${currentWeather.weather[0].icon}`}
      onClick={() => {
        dispatch(addSelectedCity({ w: weather, name: name, index: index }));
        setPage("detail");
      }}
    >
      <div className="card-text-container">
        <h2>{name}</h2>
        <p className="date">{date}</p>
        <p className="time">{time}</p>
      </div>
      <div className="card-icon-container">
        <img src={`/assets/${currentWeather.weather[0].icon}.png`} alt="" />
      </div>
      <div className="card-temperature-container">
        <p>{temperature[0]}˚</p>
      </div>
    </div>
  );
};

export default SingleCityCard;
