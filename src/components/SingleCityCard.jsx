import { formatDate, formatTime } from "./logic";

const SingleCityCard = ({ currentWeather, name }) => {
  const date = formatDate(currentWeather.dt);
  const time = formatTime(currentWeather.dt);
  const temp = currentWeather.temp;
  const temperature = temp.toString().split(".");
  return (
    <div
      className={`card-container bg-${currentWeather.weather[0].icon}`}
      onClick={() => console.log("Card clicked")}
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
