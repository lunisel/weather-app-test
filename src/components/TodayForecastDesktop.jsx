import { useSelector } from "react-redux";

const TodayForecastDesktop = () => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  return (
    <div className="today-forecast-container">
      <h2>Today</h2>
      {selectedCity && (
        <div
          className={`time-weather-container bg-${selectedCity.w.current.weather[0].icon}`}
        ></div>
      )}
    </div>
  );
};

export default TodayForecastDesktop;
