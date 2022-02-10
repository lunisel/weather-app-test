import { useState } from "react";
import { useSelector } from "react-redux";

const WeekMonthForecast = () => {
  const [week, setWeek] = useState(true);
  const selectedCity = useSelector((state) => state.user.selectedCity);
  const currentWeather = selectedCity.w.current;
  return (
    <div className="week-month-container">
      <div className="week-month-titles-container">
        <div
          className={week ? "title-container active" : "title-container"}
          onClick={() => setWeek(true)}
        >
          <h3>This week</h3>
        </div>
        <div
          className={week ? "title-container" : "title-container active"}
          onClick={() => setWeek(false)}
        >
          <h3>This month</h3>
        </div>
      </div>

      {week ? (
        <div className="forecast-container"></div>
      ) : (
        <div className="forecast-container"></div>
      )}
    </div>
  );
};

export default WeekMonthForecast;
