import Localization from "./Localization.jsx";
import SavedCities from "./SavedCities.jsx";
import Search from "./Search.jsx";

const Desktop = ({ vw }) => {
  return (
    <div className="big-container" id="desktop">
      <div className="current-selected-city"></div>
      <div className="current-other-cities">
        <SavedCities />
      </div>
      <div className="forcast-selected-city"></div>
      <div className="search-localization">
        <Search />
        <Localization />
      </div>
    </div>
  );
};

export default Desktop;
