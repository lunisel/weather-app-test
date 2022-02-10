import { useSelector } from "react-redux";

const TodayForecastDesktop = () => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  const currentWeather = selectedCity.w.current;
  return (
    <div className="today-forecast-container">
      <h2>Today</h2>
      <div
        className={`time-weather-container bg-${currentWeather.weather[0].icon}`}
      ></div>
    </div>
  );
};

export default TodayForecastDesktop;
