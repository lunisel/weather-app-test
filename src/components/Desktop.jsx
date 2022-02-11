import { useSelector } from "react-redux";
import CurrentSelectedDesktop from "./CurrentSelectedDesktop.jsx";
import Localization from "./Localization.jsx";
import SavedCities from "./SavedCities.jsx";
import Search from "./Search.jsx";
import TodayForecastDesktop from "./TodayForecastDesktop.jsx";
import WeekMonthForecast from "./WeekMonthForecast.jsx";

const Desktop = ({ vw }) => {
  return (
    <div className="big-container" id="desktop">
      <div className="current-selected-city">
        <CurrentSelectedDesktop />
      </div>
      <div className="current-other-cities">
        <SavedCities vw={vw} />
      </div>
      <div className="forcast-selected-city">
        <TodayForecastDesktop />
        <WeekMonthForecast />
      </div>
      <div className="search-localization">
        <Search />
        <Localization />
      </div>
    </div>
  );
};

export default Desktop;
