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
        <div className="forecast-container month">
          <div className="next-month-info-container">
            <div className="date-icon-container">
              <h3>
                {formatDate(selectedCity.w.daily[7].dt)
                  .split(" ")[0]
                  .substring(0, 3)}
                ,{" "}
                {
                  formatDate(selectedCity.w.daily[7].dt)
                    .split(" ")[1]
                    .split(",")[0]
                }{" "}
                {formatDate(selectedCity.w.daily[7].dt)
                  .split(" ")[2]
                  .substring(0, 3)}
              </h3>
              <img
                src={`/assets/${selectedCity.w.daily[7].weather[0].icon}.png`}
                alt="weather-icon"
              />
            </div>
            <div className="description-info-container">
              <p>
                {selectedCity.w.daily[7].temp.day.toString().split(".")[0]}˚
              </p>
              <span>{selectedCity.w.daily[7].weather[0].main}</span>
              <span>
                The high will be {selectedCity.w.daily[7].temp.max}˚C, the low
                will be {selectedCity.w.daily[7].temp.min}˚C.
              </span>
              <div className="info">
                <span>Humidity: {selectedCity.w.daily[7].humidity}%</span>
                <span>UV: {selectedCity.w.daily[7].uvi}</span>
                <span>
                  Dew point:{" "}
                  {selectedCity.w.daily[7].dew_point.toString().split(".")[0]}˚C
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekMonthForecast;
