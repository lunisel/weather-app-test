import { useSelector } from "react-redux";
import { formatTime } from "./logic";

const TodayForecastDesktop = () => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  return (
    <div className="today-forecast-container">
      <h2>Today</h2>
      {selectedCity && (
        <div
          className={`time-weather-container bg-${selectedCity.w.current.weather[0].icon}`}
        >
          <p className="now-desktop">Now</p>
          <div className="timeline-container-desktop">
            <div className="now">
              <span>
                {selectedCity.w.current.temp.toString().split(".")[0]}˚
              </span>
              <div className="circle"></div>
              <p></p>
            </div>
            {selectedCity.w.hourly.map(
              (h, i) =>
                i < 3 && (
                  <div className="other-times">
                    <span>
                      {selectedCity.w.hourly[i].temp.toString().split(".")[0]}˚
                    </span>
                    <div className="circle"></div>
                    <p>
                      {parseInt(
                        formatTime(h.dt, selectedCity.w.timezone).split(":")[0]
                      )}
                      {formatTime(h.dt, selectedCity.w.timezone)
                        .split(" ")[1]
                        .toLowerCase()}
                    </p>
                  </div>
                )
            )}
            <div className="line-desktop"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayForecastDesktop;
