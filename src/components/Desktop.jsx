import HomeMobile from "./HomeMobile.jsx";
import LocalizationMobile from "./LocalizationMobile.jsx";
import SearchMobile from "./SearchMobile.jsx";

const Desktop = () => {
  return (
    <div className="big-container" id="desktop">
      <div className="current-selected-city"></div>
      <div className="current-other-cities">
        <HomeMobile />
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
