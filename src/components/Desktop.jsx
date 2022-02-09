import LocalizationMobile from "./LocalizationMobile.jsx";
import SavedCities from "./SavedCities.jsx";
import SearchMobile from "./SearchMobile.jsx";

const Desktop = ({ vw }) => {
  return (
    <div className="big-container" id="desktop">
      <div className="current-selected-city"></div>
      <div className="current-other-cities">
        <SavedCities />
      </div>
      <div className="forcast-selected-city"></div>
      <div className="search-localization">
        <SearchMobile />
        <LocalizationMobile />
      </div>
    </div>
  );
};

export default Desktop;
