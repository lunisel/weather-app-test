import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "./logic";

const WeekMonthForecast = () => {
  const [week, setWeek] = useState(true);
  const selectedCity = useSelector((state) => state.user.selectedCity);

  return (
    <div className="week-month-container">
      <div className="week-month-titles-container">
        <div
          className={
            week
              ? "week-month-title-container active"
              : "week-month-title-container"
          }
          onClick={() => setWeek(true)}
        >
          <h3>This week</h3>
        </div>
        <div
          className={
            week
              ? "week-month-title-container"
              : "week-month-title-container active"
          }
          onClick={() => setWeek(false)}
        >
          <h3>This month</h3>
        </div>
      </div>

      {week ? (
        <div className="forecast-container">
          <div className="next-days-container desktop">
            {selectedCity.w.daily.map(
              (d, i) =>
                i !== 0 && (
                  <div className="signle-day">
                    <h2>{formatDate(d.dt).split(" ")[0]}</h2>
                    <span>{d.temp.day.toString().split(".")[0]}˚</span>
                    <div className="icon-container">
                      <img
                        src={`/assets/${d.weather[0].icon}.png`}
                        alt="icon"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <div className="forecast-container"></div>
      )}
    </div>
  );
};

export default WeekMonthForecast;
