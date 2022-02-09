import { FiMapPin } from "react-icons/fi";

const LocalizationMobile = () => {
  return (
    <div className="container">
      <div className="title-localization-container">
        <h1>Localization</h1>
      </div>
      <div className="localization-container">
        <FiMapPin />
        <span>Add localization</span>
      </div>
    </div>
  );
};

export default LocalizationMobile;
